// import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Encuestas from './componentes/Encuestas';
import Login from './componentes/Login';
import Respuesta from './componentes/respuestas';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Validacion = ({element: Componente, ...rest}) => {
  const estaAutenticado = !!localStorage.getItem('access_token');
  return estaAutenticado ? Componente : <Navigate to='/login' />;
};

function App() {
  const [ usuarioId, setUsuarioId ] = useState('');

  const obtenerId = async () => {

    const token = localStorage.getItem('access_token');

    console.log('access token desde APPs', token);

    if (token) {
      try {

        axios.get('http://localhost:8000/encuesta/api/obtener/usuario/', {
          headers: {
            'Authorization': token
          }
        })
        .then((response) => {
          setUsuarioId(response.data.usuario_id);
        })


      } catch (error) {
        console.log(error);
      }
    }
    
  };

  console.log('usuarioId desde APPs', usuarioId);

  useEffect(() => {
    obtenerId();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encuestas" element={<Validacion element={<Encuestas />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/respuestas" element={<Respuesta  usuarioId={usuarioId}/>} />
      </Routes>
    </Router>
  );
}

export default App;
