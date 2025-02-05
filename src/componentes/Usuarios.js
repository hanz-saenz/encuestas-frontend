import React, { useState, useEffect } from "react";


const Usuarios = () => {

    
    const [usuarios, setUsuarios] = useState([]);

   

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((respuesta) => respuesta.json())
        .then((dato) => setUsuarios(dato))
        .catch((error) => console.log('Error en la consulta',error));
    }, [])


    return (
        <div>
            <h1>Usuarios</h1>
            {usuarios.map((usuario) => (
                <p key={usuario.id}>{usuario.name}</p>
            ))}
        </div>
    );
};

export default Usuarios;