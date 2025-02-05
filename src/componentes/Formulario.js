import React from "react";
import { useFormik } from "formik";

const Formulario = () => {

    const validaciones = values => {
        if (!values.telefono) {
            alert('El campo telefono no puede estar vacio');
        }
        if (values.telefono.length < 10) {
            alert('El telefono debe tener 10 digitos');
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            telefono: '',
        },
        validate: validaciones,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
        <div>
            <h1>Formulario</h1>
        </div>

        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email</label>
            <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

            <label htmlFor="telefono">Telefono</label>
            <input 
              type="tel"
              name="telefono"
              id="telefono"
              onChange={formik.handleChange}
              value={formik.values.telefono}
            />

            <button type="submit">Enviar</button>

        </form>
        </>
    );
};

export default Formulario;