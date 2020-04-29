import * as types from "../types";
export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case types.ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      };
    case types.FETCH_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    case types.REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    default:
      return state;
  }
};
