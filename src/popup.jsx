import React from "react";
import { render } from "react-dom";

function Popup(){
    return (
        <div>
            <h1> Hellur</h1>
        </div>
    );
}


render(<Popup/>, window.document.querySelector("#react-target"));