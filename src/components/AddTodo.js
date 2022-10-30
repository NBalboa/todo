import React, { useState } from "react";

function AddTodo({onAdd}) {

    const [title, setTitle] = useState('')
    const [note, setNotes] = useState('')
    const [urgency, setUrgency] = useState('Low')
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !note){
            alert("All Field must not be blank")
            return
        }
        else{
            onAdd(title,note,urgency)
            setTitle('')
            setNotes('')
            setUrgency('Low')
        }
        
    }

    return (
        <div className="d-flex justify-content-center mt-2 pt-3">
            <form onSubmit={onSubmit} method="POST" className="row input-group mb-3 w-75 h-auto" id="form">
                <div className="col-12 mb-3">
                    <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..."/>
                </div>
                <div className="col-12 mb-3">
                    <textarea className="form-control" value={note} onChange={(e) => setNotes(e.target.value)} placeholder="Take a note..."></textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="urgency" className="form-label me-2">Priority</label>
                    <select id="urgency" className="form-label" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary float-end">Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo