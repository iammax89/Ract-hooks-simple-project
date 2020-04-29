import React, { useReducer, useContext } from "react";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import * as types from "../types";
import { AlertContext } from "../alert/alertContext";
const url = "https://react-hooks-8dc2e.firebaseio.com/";

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  };
  const { showAlert } = useContext(AlertContext);

  const showLoader = () =>
    dispatch({
      type: types.SHOW_LOADER
    });

  const fetchNotes = () => {
    showLoader();
    ajax
      .getJSON(`${url}notes.json`)
      .pipe(
        map(Response => {
          if (Response) {
            return Object.keys(Response).map(key => ({
              id: key,
              ...Response[key]
            }));
          } else {
            return [];
          }
        })
      )
      .subscribe(
        notes => {
          dispatch({
            type: types.FETCH_NOTES,
            payload: notes
          });
        },
        error => showAlert(`${error.message}`, "danger")
      );
  };

  const addNote = title => {
    const newNote = {
      title,
      date: new Date().toJSON()
    };
    ajax.post(`${url}notes.json`, JSON.stringify(newNote)).subscribe(
      () => {
        showAlert("Note was created, success!", "success");
        fetchNotes();
      },
      error => showAlert(`${error.message}`, "danger")
    );
  };

  const removeNote = id => {
    ajax.delete(`${url}notes/${id}.json`).subscribe(
      () => {
        dispatch({
          type: types.REMOVE_NOTE,
          payload: id
        });
        showAlert("Note was successfully removed.");
      },

      error => showAlert(`${error.message}`, "danger")
    );
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);
  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
