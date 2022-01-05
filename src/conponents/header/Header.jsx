import React from "react";
import './index.css';
import logo from "./starlogo.png"
import { CarWidget } from "../carWidget/CarWidget";
import { Link } from "react-router-dom";





export function Header(){

    

    return(
        <header className="headder-wrapper">
            <Link to="/" className="logo-wrapper">
                <img className="logo" src={logo} alt="" />
                <p className="titleText">Stardead</p>
            </Link>
            <nav>
                <Link to="/">Productos</Link>
                <Link to="/category/sale">Ofertas</Link>
                <Link to="/category/news">Novedades</Link>
                <Link to="/cart"><CarWidget /></Link>
                
            </nav>
        </header>
    )
}