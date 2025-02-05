import React, { useContext } from "react";

const nuevoTema = React.createContext('light');
const Tema = () => {
    
    const tema = useContext(nuevoTema);

    return (
        <button className={ `theme-${tema}`	}>Cambiar tema</button>
    );
};

export default Tema;