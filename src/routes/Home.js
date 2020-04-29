import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/database/firebaseContext";
import { Spinner } from "../components/Spinner";

export const Home = () => {
  useEffect(() => fetchNotes(), []);
  const { fetchNotes, loading, notes, removeNote } = useContext(
    FirebaseContext
  );
  return (
    <React.Fragment>
      <Form />
      <hr />
      {loading ? <Spinner /> : <Notes onRemove={removeNote} notes={notes} />}
    </React.Fragment>
  );
};
