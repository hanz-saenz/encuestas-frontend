import React, { useState,useCallback } from "react";

const ContadorCallback = () => {
    const [contador, setContador] = useState(0);
    
    const incrementarContador = useCallback(() => {
        setContador((prevContador) => prevContador + 1);
    }, []);

    return (
        <div>
            <h1>Resultado {contador}</h1>
            <button onClick={incrementarContador}>Incrementar</button>
        </div>
    );
};

export default ContadorCallback;