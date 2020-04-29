import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/database/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const { showAlert } = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);

  const onSubmitHandler = event => {
    event.preventDefault();
    if (value) {
      addNote(value);
      setValue("");
    } else {
      showAlert("You must enter the title first", "danger");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="help"
          placeholder="Enter title..."
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <small id="help" className="form-text text-muted">
          Note title
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
