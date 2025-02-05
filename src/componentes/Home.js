import React from "react";
import Focus from "./Focus";
import ContadorCallback from "./ContadorCallback";
import NavBar from "./NavBar";
import './Home.css';

import Formulario from "./Formulario";
const Home = () => {

    return (
        <>
            <NavBar />
            <div className="content">
                <h1>Bienvenidos a mi sitio web</h1>
                <Formulario />
                <ContadorCallback />
                <Focus />
            </div>  
        </>

    );
};

export default Home;
