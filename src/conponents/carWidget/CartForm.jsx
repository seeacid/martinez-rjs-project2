import React from 'react'
import "./Cart.css"
import { useOpClModal , useOnCarItems,useTotalPrice } from '../context/CartContext'
import db from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Fragment, useState } from 'react/cjs/react.development'
import { products } from '../itemListContainer/Items'
import { contains } from '@firebase/util'




export function CartForm(){

    let emailValido = false

    function validarEmail(email){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        emailValido = expReg.test(email) 
        console.log(emailValido)
    }
    
    const [buyerInfo, setBuyerInfo] = useState({ nombre: '', apellido: '', provincia: '', localidad: '', direccion: '', email: '', emailc:'', telefono: '' });

    const onChange = (evt) => {
        setBuyerInfo({ ...buyerInfo, [evt.target.id]: evt.target.value })
    };

    
    const opClModal = useOpClModal()
    const onCarItems = useOnCarItems()
    const totalPrice = useTotalPrice()
    const ref = collection(db,"buyorder")

    
    const comprar = ()=>{
        validarEmail(buyerInfo.email)
        console.log(emailValido,buyerInfo.email,buyerInfo.emailc)

        let fecha = new Date()
        if(emailValido==true && buyerInfo.email===buyerInfo.emailc){
            

            var newOrder = {
            Comprador : buyerInfo,
            Productos: onCarItems,
            Fecha : fecha,
            Total: totalPrice,
            }

        
            addDoc(ref,newOrder).then(({id})=>{
            alert(`Compra realizada con exito, Su numero de orden es ${id}`)
            })

            opClModal()
        }else{
            alert("Utiliza un email valido")
        }
      
        

       



    }

    
    
   



    return(
        <div className="modal">
            <div className="modalBar">
                <p className="modalTitle">Formulario de compra</p>
                <button onClick={()=>opClModal()}>X</button>
            </div>
            <form action="">
                <p>Nombre</p>
                <input id='nombre' type="text" onChange={(evt) => onChange(evt)} />
                <p>Apellido</p>
                <input id="apellido" type="text" onChange={(evt) => onChange(evt)} />
                <p>Provincia</p>
                <input id="provincia"  type="text" onChange={(evt) => onChange(evt)} />
                <p>Localidad</p>
                <input id="localidad" type="text"  onChange={(evt) => onChange(evt)}/>
                <p>Direccion</p>
                <input id="direccion" type="text" onChange={(evt) => onChange(evt)}/>
                <p>Email</p>
                <input id="email" type="email" onChange={(evt) => onChange(evt)} />
                <p>Confirmar Email</p>
                <input id="emailc" type="email" onChange={(evt) => onChange(evt)} />
                <p>Telefono</p>
                <input id="telefono" type="tel" onChange={(evt) => onChange(evt)} />
                
            </form>

            <button 
            disabled={
                !(
                  buyerInfo.nombre !== '' &&
                  buyerInfo.apellido !== '' &&
                  buyerInfo.provincia !== '' &&
                  buyerInfo.localidad !== '' &&
                  buyerInfo.direccion !== '' &&
                  buyerInfo.email !== '' &&
                  buyerInfo.emailc !== '' &&
                  buyerInfo.telefono !== '' 
                )
              }
              onClick={()=>comprar()} 
              >Terminar Compra</button>
        </div>
    )
}