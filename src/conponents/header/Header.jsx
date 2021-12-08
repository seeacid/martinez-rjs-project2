import React from "react";
import './index.css';
import logo from "./starlogo.png"
import { CarWidget } from "../carWidget/CarWidget";
import { NavLink , Link } from "react-router-dom";
import {useOnCarItems , useCartViewCount , useCarViewQnt} from "../context/CartContext"





export function Header(){

    const onCarItems = useOnCarItems()
    const carViewQnt = useCarViewQnt()

    return(
        <header className="headder-wrapper">
            <Link to="/" className="logo-wrapper">
                <img className="logo" src={logo} alt="" />
                <p>Stardead</p>
            </Link>
            <nav>
                <Link to="/">Productos</Link>
                <Link to="/category/sale">Ofertas</Link>
                <Link to="/category/news">Novedades</Link>
                <Link to="/cart"><CarWidget /></Link>
                <p>{carViewQnt}</p>
                
            </nav>
        </header>
    )
}