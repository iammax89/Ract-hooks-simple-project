import * as types from "../types";
export const alertReducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_ALERT:
      return {
        ...action.payload,
        visible: true
      };
    case types.HIDE_ALERT:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};
