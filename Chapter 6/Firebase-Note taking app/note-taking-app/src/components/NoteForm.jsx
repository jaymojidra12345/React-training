import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteForm = ({ selectedNote, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteData = { title, content };

    if (selectedNote && selectedNote.id) {

      axios
        .put(`http://localhost:5000/notes/${selectedNote.id}`, noteData)
        .then(() => onSave())
        .catch((error) => console.error("Error updating note:", error));
    } else {

      axios
        .post("http://localhost:5000/notes", noteData)
        .then(() => onSave())
        .catch((error) => console.error("Error creating note:", error));
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br/><br/>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>< br/><br/>
      <button type="submit">{selectedNote ? "Update Note" : "Add Note"}</button><br/><br/>
    </form>
  );
};

export default NoteForm;
