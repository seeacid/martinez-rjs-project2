import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import { NavLink , Link } from "react-router-dom";

import "./ItemDetail.css"

export const ItemDetail = ({id , name , img , price, stock,cartCount ,addToCart , goCart}) => {


    return(
        <div className="itemDetailWrapper">
            <img className="itemDetailImg" src={img} alt={`${id}-${name}`} />

            <h1 className="itemDetailTitle">{name}</h1>
            <ul className="itemDetailList">
                <li>100% Algodon</li>
                <li>Estampa en Serigrafia</li>
                <li>Talles Oversize</li>
                <li>Costura reforzada</li>
            </ul>

            <h2>${price}</h2>
            <p>Unidades disponibles:{stock}</p>
            {goCart ? (<> <Link to="/cart"> <button className="itemDetailButton">Terminar Compra</button> </Link> </>)
            :
            (<> <ItemCount item={{id,name,img,price,stock,cartCount}} stock={stock} initial={0} addToCart={addToCart} /> </>)}
            
        </div>
    )
}

