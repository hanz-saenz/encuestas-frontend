import React, {  useMemo } from "react";

const Calcular = ({ entradaUno, entradaDos }) => {
    
    const resultado = useMemo(() => {
        return entradaUno + entradaDos;
    }, [entradaUno, entradaDos]);

    return (
        <div>
            <h1>Resultado {resultado}</h1>
        </div>
    );
};

export default Calcular;