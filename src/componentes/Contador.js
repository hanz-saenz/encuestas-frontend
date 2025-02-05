import React, { useState } from "react";


const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };
    
    return (
        <div>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)} >Incrementar</button>
            <button onClick={incrementarContador} >Incrementar</button>
        </div>
    );
};


export default Contador;