import React, { useRef } from "react";


const Focus = () => {

    const inputfocus = useRef();

    const enfocar = () => {
        inputfocus.current.focus();
    };

    return (
        <div>
            <h1>Focus</h1>

            <input type="text" ref={inputfocus} />

            <button onClick={enfocar}>Enfocar</button>
        </div>
    );
};

export default Focus;   