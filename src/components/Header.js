import React, { useState } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"

function Header() {
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-8">
                    <h1>Todo List</h1>
                </div>
                <div className="col-4">
                    <button className="mt-2 btn btn-success" id="hide">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Header
