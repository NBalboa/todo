import React, { useEffect } from "react";
import Todo from "./Todo";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"

function Todos({todos, onDelete, onCheck}) {
    useEffect(() => {
        $('#sortable').sortable()
        $('.drag').draggable()
    }, [])

    return (
        <div className='row p-2 drag' id="sortable">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck}/>
                )
            )}
        </div>
    )
}

export default Todos