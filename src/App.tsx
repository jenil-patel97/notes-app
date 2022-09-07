import React, { useState } from "react";
import { Note } from "./models/note.model";
import "./App.css";
import Header from "./component/Navbar";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Learning",
      text: "Learning new skill that is typeScript.",
      color: "dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
