import React from 'react'
import logo from "../header/starlogo.png"
import "./index.css"

export function Footer() {


    

    return(
        <footer>
        <div className="tradeMark">
            <img className="footLogo" src={logo} alt="logo" />
            <p className="subName">stardead </p>
        </div>

        

        <div className="contacto">

            <a href="mailto:info@stardead.com">
                <i className="far fa-envelope icon"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5491100000000">
                <i className="fab fa-whatsapp icon"></i>
            </a>
            <a href="https://www.instagram.com/stardead.clothes/?hl=es-la">
            <i className="fab fa-instagram icon"></i>
            </a>
        </div>
    </footer>
    )

}