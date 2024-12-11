import { useState, useEffect } from 'react'

const Project = () => {

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes")
        return savedNotes ? JSON.parse(savedNotes) : []
    })

    const [currentNote, setCurrentNote] = useState("")

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const addNote = () => {
        if (currentNote) {
            setNotes([...notes, currentNote])
            setCurrentNote("")
        }
    }

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes)
    }

    const updateNote = (index) => {
        const updatedNote = prompt("Enter the updated note")
        if (updateNote !== null) {
            const updatedNotes = notes.map((note, i) => (i === index ? updatedNote : note));
            setNotes(updatedNotes);
        }
    }

    return (
        <div>
            <h1>Project :  Note-taking app</h1>
            <input type='text' value={currentNote} onChange={(e) => setCurrentNote(e.target.value)} placeholder='Enter your note here' /><br />
            <br /><button onClick={addNote}>Add Note</button>

            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <h3> {note}
                            <button onClick={() => updateNote(index)}>Edit</button> {"  "}
                            <button onClick={() => deleteNote(index)}>Delete</button>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Project
