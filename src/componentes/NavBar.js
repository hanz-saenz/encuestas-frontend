import React from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        {/* <a className="active" href="/">Home</a> */}
                        <NavLink to="/" exact className="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/encuestas" className="active">Encuestas</NavLink>
                        {/* <a className="active" href="/encuestas">Encuestas</a> */}
                    </li>
                    <li>
                        <NavLink to="/login" className="active">Login</NavLink>
                        {/* <a className="active" href="/login">Login</a> */}
                    </li>
                </ul>
            </nav>
        
        </>
    );
};

export default NavBar;