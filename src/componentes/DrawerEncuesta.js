import React, {useState} from "react";
import axios from 'axios';
import { Drawer, Button, Input, Form } from 'antd';


const DrawerEncuesta = ({ open, onClose, listaEncuestas }) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const valorGuardar  = async () => {

        if (!titulo || !descripcion) {
            alert('Todos los campos deben estar diligenciados');
        }

        try {
            const response = await axios.post('http://localhost:8000/encuesta/api/crear/encuesta', {
                titulo,
                descripcion
            });
            console.log(response.data);
            listaEncuestas();
            onClose();
            setTitulo('');
            setDescripcion('');
        }
        catch (error) {
            console.log(error);
        }

    };

    return (
        <>

        <Drawer
          title='Agregar Encuesta'
          width={400}
          onClose={onClose}
          open={open}
          footer={
            <div>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={valorGuardar} type="primary">Crear</Button>
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


export default DrawerEncuesta;