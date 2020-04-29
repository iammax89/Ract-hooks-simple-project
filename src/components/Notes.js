import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const Notes = ({ notes, onRemove }) => {
  const recevedNotes = notes.map(note => (
    <CSSTransition key={note.id} classNames={"note"} timeout={750}>
      <li className="list-group-item d-flex justify-content-between align-middle">
        <div>
          <strong className="mr-3">{note.title}</strong>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        <button
          type="button"
          className="close"
          onClick={() => onRemove(note.id)}
        >
          &times;
        </button>
      </li>
    </CSSTransition>
  ));

  return (
    <TransitionGroup className="list-group" component="ul">
      {recevedNotes}
    </TransitionGroup>
  );
};
