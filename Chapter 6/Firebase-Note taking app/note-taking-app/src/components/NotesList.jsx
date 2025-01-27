import React from "react";

const NotesList = ({ notes, onEdit, onDelete  }) => {

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(360px, 1fr))",
      gap: "80px",
      padding: "20px",
    },
    card: {
      background: "#f8f9fa",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    button: {
      background: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      background: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (

        notes.map((note) => (
          <div key={note.id} style={styles.card}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div style={styles.actions}>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.background = "#0056b3")}
                onMouseOut={(e) => (e.target.style.background = "#007bff")}
                onClick={() => onEdit(note)}
              >
                Edit
              </button>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.background = "#0056b3")}
                onMouseOut={(e) => (e.target.style.background = "#007bff")}
                onClick={() => onDelete(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
