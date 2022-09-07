import React, { useState } from "react";
import { Note } from "./models/note.model";
import "./App.css";
import Header from "./component/Navbar";
import Container from "react-bootstrap/Container";
import NotesList from "./component/NotesList";
import { Col, Row } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Learning",
      text: "Learning new skill that is typeScript.",
      color: "#E0E0E0",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
