import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

import NoteForm from './NoteForm';
import NotesList from './NotesList';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    const fetchNotes = () => {
        axios
            .get(`http://localhost:5000/notes`)
            .then((response) => setNotes(response.data))
            .catch((error) => console.error("Error fetching notes:", error));
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleSave = () => {
        setSelectedNote(null);
        fetchNotes();
    };

    const handleEdit = (note) => {
        setSelectedNote(note);
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5000/notes/${id}`)
            .then(() => fetchNotes())
            .catch((error) => console.error("Error deleting note:", error));
    };

    return (
        <div>
            <h1>Note taking App</h1>
            <NoteForm selectedNote={selectedNote} onSave={handleSave} />
            <NotesList notes={notes} onEdit={handleEdit} onDelete={handleDelete}  />
        </div>
    )
}

export default Notes
