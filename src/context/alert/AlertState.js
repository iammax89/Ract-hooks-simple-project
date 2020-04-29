import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import * as types from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const showAlert = (text, type = "warning") =>
    dispatch({
      type: types.SHOW_ALERT,
      payload: { text, type }
    });

  const hideAlert = () =>
    dispatch({
      type: types.HIDE_ALERT
    });

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        hideAlert,
        alert: state
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
