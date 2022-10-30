import React, { useState } from "react";

const pending = "bg-warning ps-3 pe-3 rounded-pill"
const success = "bg-success ps-3 pe-3 rounded-pill"
const color_medium = "bg-primary ps-3 pe-3 rounded-pill" 
const color_low = "bg-info ps-3 pe-3 rounded-pill"
const color_high = "bg-danger ps-3 pe-3 rounded-pill"

function Todo({todo, onDelete, onCheck}) {
    const [status, setStatus] = useState(todo.status)
    const [infoStatus, setInfoStatus] = useState("Pending")
    const [bgStatus, setBgStatus] = useState(pending)
    
    const bg_prior =  () => {
        if (todo.priority === "High"){
            return color_high
        }
        else if (todo.priority === "Medium"){
            return color_medium
        }
        else{
            return color_low
        }
    }

    const handleCheck = (e) => {
        if(e.target.checked){
            setInfoStatus("Complete")
            setBgStatus(success)
            onCheck(todo.id)
        }
        else{
            setInfoStatus("Pending")
            setBgStatus(pending)
            onCheck(todo.id)
        }
        setStatus(current => !current)
    }
    return (
        <div className='col-sm-3 mb-3'>
            <div className="card border-secondary bg-dark text-white">
            <div className='card-body'>
                <button className='btn-close btn-close-white float-end' onClick={() => onDelete(todo.id)}></button>
                <h5 className='card-title mt-4'>{todo.title}</h5>
                <p className='card-text'>{todo.text}</p>
                <div className='form-check mt-4'>
                    <input className='form-check-input' type="checkbox" id= "status" value={status} onChange={handleCheck}/>
                    <label className='form-check-label fs-6 w-100' htmlFor="status"><span className={bgStatus}>{infoStatus}</span> <span className={bg_prior()}>{todo.priority}</span></label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Todo