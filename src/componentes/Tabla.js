import React from "react";
import { Button, Table } from "antd";

const Tabla = ({datos, onEditClick, onDeleteClick}) => {

    const columns = [
        {
            title: 'Id Encuesta',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Titulo',
            dataIndex: 'titulo',
            key: 'titulo',
        },
        {
            title: 'Descripción',
            dataIndex: 'descripcion',
            key: 'descripcion',
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (text, record) => (
                <>
                    <Button onClick={() => onEditClick(record.id)}>Editar</Button>
                    <Button onClick={() => onDeleteClick(record.id)}>Eliminar</Button>
                </>
            ),
        }
    ]
    return (
        <>

        <Table columns={columns} dataSource={datos} />
        
        {/* <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripción</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((encuesta) => (
                    <tr key={encuesta.id}>
                        <td>{encuesta.id}</td>
                        <td>{encuesta.titulo}</td>
                        <td>{encuesta.descripcion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>  Paginación </div> */}

        </>
    );
};

export default Tabla;