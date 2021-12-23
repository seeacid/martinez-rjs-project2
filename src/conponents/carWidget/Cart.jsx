import React, { useState } from 'react'
import { useOnCarItems ,useDeleteProduct,useAddTotalPrice,useTotalPrice,useAddOne, useRemoveOne,useCarViewQnt,useOpClModal,useModalState} from '../context/CartContext'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { CartForm } from './CartForm'




export function Cart(){


    const deleteProduct = useDeleteProduct()
    const onCarItems = useOnCarItems()
    const addTotalPrice = useAddTotalPrice()
    const totalPrice = useTotalPrice()
    const addOne = useAddOne()
    const removeOne = useRemoveOne()
    const carViewQnt = useCarViewQnt()
    const opClModal = useOpClModal()
    const modalState = useModalState()


    let coco = true
    addTotalPrice()

    const addTo = ()=>{
        console.log(carViewQnt)
    }
   

    return  carViewQnt ? (
        <>
            <div className="greetings">
                <table>
                                <thead>
                                    <tr class="titlerow">
                                        <th>Remove</th>
                                        <th>Imagen</th>
                                        <th>Product</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                            </table>
                {
                    onCarItems?.map((item)=>{
                        
                        

                        return(
                            
                            <> 
                            

                                <table>
                                    <tbody>
                                        <tr ket={item.id}>
                                            <th><button onClick={()=>deleteProduct(item)} class="removeBtn">x</button></th>
                                            <th><img src={item.img} width="70px" alt="" /></th>
                                            <th>{item.name}</th>
                                            <th>${item.price}</th>
                                            <th>
                                                <div>
                                                    <button onClick={()=>removeOne(item)} class="addBtn">-</button>
                                                    <p class="countNum">{item.onCart}</p>
                                                    <button  onClick={()=>addOne(item)}  class="addBtn">+</button>
                                                </div>
                                            </th>
                                            <th>${item.price*item.onCart}</th>
                                        </tr>
                            
                                        
                                    </tbody>
                                </table>

                                
                            </>
                        )
                    })
                }

                <h2>TOTAL :{totalPrice}</h2>
                <button onClick={()=>opClModal()}>Terminar Compra</button>
            </div>
            { modalState && <CartForm/>}
        </>
    ) : (
        <div className="greetings">
            <h1>El Carro esta vacio</h1> 
            <Link to="/" className="logo-wrapper">

                <h2>Volver al Inicio</h2>    
            </Link>       
        </div>
    )

        
    
}




