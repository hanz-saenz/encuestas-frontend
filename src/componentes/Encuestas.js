import React, { useEffect, useState} from "react";
import Tabla from "./Tabla";
import axios from "axios";
import NavBar from "./NavBar";
import DrawerEncuesta from "./DrawerEncuesta";
import { Button } from "antd";
import DrawerEditarEncuesta from "./DrawerEditarEncuesta";

const Encuestas = () => {
    //     vamos a mostrar, en donde guaradmos datos
    const [encuestas, setEncuestas] = useState([]);
    const [draweOpen, setDrawerOpen] = useState(false);
    const [draweOpenEdit, setDrawerOpenEdit] = useState(false);
    const [encuestaId, setEncuestaId] = useState(null);


    const listaEncuestas = async () => {
        try {
            axios
            .get('http://localhost:8000/encuesta/api/encuestas/?format=json')
            .then((respuesta) => {
                console.log(respuesta.data);
                setEncuestas(respuesta.data);
            })
            .catch((error) => {
                console.log('Error en ',error)
            });
        }

        catch (error) {}
    };

    const eliminarEncuesta = async (encuestaId) => {
        const confirmarEliminacion = window.confirm('¿Seguro desea eliminar esta encuesta?');
        
        if (confirmarEliminacion){
            try {
                axios
                .delete(`http://localhost:8000/encuesta/api/eliminar/encuesta/${encuestaId}`)
                .then((respuesta) => {
                    // setEncuestas(respuesta.data);
                    listaEncuestas();
                    alert('Encuesta eliminada con exito');
                    
                })
                .catch((error) => {
                    console.log('Error en ',error)
                });
                }

                catch (error) {
                    console.log(error);
                }
            }
    };
    

    useEffect(() => {
        listaEncuestas()
    }, [])

    const editarClick = (id) => {
        setEncuestaId(id);
        setDrawerOpenEdit(true);
    }

    return (
        <>
            <NavBar />
            <div>
                <h1>Encuestas</h1>
                <Button onClick={()=> setDrawerOpen(true)}>Agregar</Button>
                <Tabla datos={encuestas} onEditClick={editarClick} onDeleteClick={eliminarEncuesta}/>

                <DrawerEncuesta
                    open={draweOpen}
                    onClose={() => setDrawerOpen(false)}
                    listaEncuestas={listaEncuestas}
                />
                <DrawerEditarEncuesta 
                    open={draweOpenEdit}
                    onClose={() => setDrawerOpenEdit(false)}
                    encuestaId={encuestaId}
                    listaEncuestas={listaEncuestas} 
                />
            </div>
        </>
    );
};

export default Encuestas;