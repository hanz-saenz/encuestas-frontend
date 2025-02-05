import React, { useState, useEffect }  from "react";
import { Drawer, Button, Form, Input } from 'antd';
import axios from 'axios';

const DrawerEditarEncuesta = ({ open, onClose, listaEncuestas, encuestaId }) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const datosEncuesta = async (encuestaId) => {
        try {
            const response = await axios.get(`http://localhost:8000/encuesta/api/consultar/encuesta/${encuestaId}`);
            setTitulo(response.data.titulo);
            setDescripcion(response.data.descripcion);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        datosEncuesta(encuestaId);
    }, [open, encuestaId]);

    const editarEncuesta = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/encuesta/api/editar/encuesta/${encuestaId}`, {
                titulo,
                descripcion
            });
            console.log(response.data);
            listaEncuestas();
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <Drawer
                  title='Editar Encuesta'
                  width={400}
                  onClose={onClose}
                  open={open}
                  footer={
                    <div>
                        <Button onClick={onClose}>Cancelar</Button>
                        <Button onClick={editarEncuesta} type="primary">Guardar</Button>
                    </div>
                  }          
                
                >
                    <Form layout="vertical">
                        <Form.Item label='Título de la encuesta'>
                            <Input
                                value={titulo}
                                onChange={(e)=> setTitulo(e.target.value)}
                                placeholder="Ingresa el títutlo de la encuesta"
                            />
                        </Form.Item>
                        <Form.Item label='Descripción de la encuesta'>
                            <Input.TextArea
                                rows={4}
                                value={descripcion}
                                onChange={(e)=> setDescripcion(e.target.value)}
                                placeholder="Ingresa la descripción de la encuesta"
                            />
                        </Form.Item>
                    </Form>
        
                </Drawer>
        </>
    );
};

export default DrawerEditarEncuesta