import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [ username, setUsuario ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const guardarToken = async (username, token_access) => {

    try {

      await axios.post('http://localhost:8000/cuenta/tokenusuario', {
        username: username,
        token_access: token_access,
      });
      console.log('Se guardo el token')

    }

    catch (error) { 
      console.log(error);
    }
  }

  const loginToken = async (e) => {
    e.preventDefault();
    try {

        const token = await axios.post('http://localhost:8000/api/token/', {
          username,
          password
        });
        guardarToken(username, token.data.access);
        // Guardar el token en el almacenamiento local
        localStorage.setItem('access_token', token.data.access);
        localStorage.setItem('refresh_token', token.data.refresh)

        // redirigir a la pagina de encuestas       
        
      } catch (error) {
        setError('Credenciales incorrectas');
        console.log(error);
      }
    };



  return (
    <>

    <div>
      <h1>Login</h1>

      <form onSubmit={loginToken}>
        <label>Usuario</label>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} required />
        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Iniciar sesión</button>
        {error && <p>{error}</p>}
      </form>

    </div>
    
    </>
  );
}

export default Login;