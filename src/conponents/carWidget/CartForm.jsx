import React from 'react'
import "./Cart.css"
import { useOpClModal , useOnCarItems,useTotalPrice } from '../context/CartContext'
import db from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Fragment } from 'react/cjs/react.development'
import { products } from '../itemListContainer/Items'




export function CartForm(){
    
     const opClModal = useOpClModal()
    const onCarItems = useOnCarItems()
    const totalPrice = useTotalPrice()

    const comprar = ()=>{

        let fecha = new Date()
       

        
        let buyer ={}
        buyer.nombre = document.getElementById("inputNombre").value
        buyer.apellido = document.getElementById("inputApellido").value
        buyer.provincia = document.getElementById("inputProvincia").value
        buyer.localidad =  document.getElementById("inputLocalidad").value
        buyer.direccion = document.getElementById("inputDireccion").value
        buyer.email = document.getElementById("inputEmail").value
        buyer.telefono = document.getElementById("inputTelefono").value
        

        const ref = collection(db,"buyorder")
        const newOrder = {
            Comprador : buyer,
            Productos: onCarItems,
            Fecha : fecha,
            Total: totalPrice,
        }

        
        addDoc(ref,newOrder).then(({id})=>{
            alert(`Compra realizada con exito, Su numero de orden es ${id}`)
        })

        opClModal()

       



    }

    
    
   



    return(
        <div className="modal">
            <div className="modalBar">
                <p className="modalTitle">Formulario de compra</p>
                <button onClick={()=>opClModal()}>X</button>
            </div>
            <form action="">
                <p>Nombre</p>
                <input id='inputNombre' type="text" />
                <p>Apellido</p>
                <input id="inputApellido" type="text" />
                <p>Provincia</p>
                <input id="inputProvincia"  type="text" />
                <p>Localidad</p>
                <input id="inputLocalidad" type="text" />
                <p>Direccion</p>
                <input id="inputDireccion" type="text"/>
                <p>Email</p>
                <input id="inputEmail" type="email" />
                <p>Telefono</p>
                <input id="inputTelefono" type="tel" />
                
            </form>

            <button  onClick={()=>comprar()} className="buyBtn">Terminar Compra</button>
        </div>
    )
}