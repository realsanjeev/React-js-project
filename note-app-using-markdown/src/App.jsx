import React, {useState, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

import Split from "react-split";
import {nanoid} from "nanoid";

import "./styles.css";

export default function App() {
    const [notes, setNotes] = useState(()=>{
        return JSON.parse(localStorage.getItem('notes')) || []})

    useEffect(()=>{
        const storeValues = JSON.stringify(notes)
        localStorage.setItem("notes", storeValues)
    }, [notes])

    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [...prevNotes, newNote])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        // set newest update at top of note list
        setNotes(oldNotes => {
            const newArray = []
            for (let i=0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNotes[i].id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                }
                else {
                    newArray.push(oldNotes[i])
                }
            }
        return newArray
        }

            // this doesnot focus updated note in top of list
        //     oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // })
    )}
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, noteId) {
        // event.stopPropagation();
        console.log("Delete ", noteId);
        setNotes(oldNotes => {
          return oldNotes.filter(note => note.id !== noteId);
        });
      }
      
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    delNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
