import React from 'react'
import { useOnCarItems ,useDeleteProduct,useOnCarCount} from '../context/CartContext'

export function Cart(){


    const deleteProduct = useDeleteProduct()
    const onCarItems = useOnCarItems()
    const onCarCount = useOnCarCount()

    console.log(onCarItems)


    return(
        <div className="greetings">
            {
                onCarItems?.map((item)=>{
                    
                    

                    return(
                        <div ket={item.id} className="productWrapper">
                            <img src={item.img} alt="" className="productImg" />
                            <h1 className="productTitle">{item.name}</h1>
                            <h2 className="productPrice">{item.price}</h2>
                            <h2 className="productPrice">{item.onCart} </h2>
                            <button onClick={()=>deleteProduct(item)}> Borrar </button>
                        </div>
                    )
                })
            }
        </div>
    )
}