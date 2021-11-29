import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import "./itemsStyle.css"
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {

    return(
        <Link to={`/product/${item.id}`}>
            <div className="productWrapper">
                <img src={item.img} alt="" className="productImg" />
                <h1 className="productTittle">{item.name}</h1>
                <p className="productPrice">${item.price}</p>
                
            </div>
        </Link>
    )
}
