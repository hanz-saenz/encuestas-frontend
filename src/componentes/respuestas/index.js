import React, { useState,  useEffect} from "react";
import NavBar from "./../NavBar";
import axios from "axios";

const Respuesta = ({ usuarioId}) => {

    const [ respuestas, setRespuestas ] = useState([]);

    const listaRespuestas = async (usuarioId) => {
        try {
            axios
            .get(`http://localhost:8000/encuesta/api/respuestas/${usuarioId}?format=json`)
            .then((respuesta) => {
                setRespuestas(respuesta.data);
            })
            .catch((error) => {
                console.log('Error en ',error)
            });
        }

        catch (error) {
            console.log('error al consultar respuestas', error);
        }
    };

    useEffect(() => {
        console.log('usuarioId desde useEffect', usuarioId);
        setTimeout(() => {
            listaRespuestas(usuarioId);
        }, 1000);
    }, [usuarioId]);

    

    return (
        <>
            <NavBar />
            <div className="content">
                <h1>Bienvenidos a las respuestas</h1>
                {respuestas.map((respuesta) => (<>
                        <p key={respuesta.id}>{respuesta.encuesta}</p>
                        <p key={respuesta.id}>{respuesta.fecha_creacion}</p>
                        <p key={respuesta.id}>{respuesta.usuario}</p>
                        <p key={respuesta.id}>{respuesta.encuesta}</p>
                    </>
                ))}
            </div>  
        </>

    );
};

export default Respuesta;
