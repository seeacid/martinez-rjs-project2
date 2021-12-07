import React, {useState, useEffect} from 'react'
import "./index.css"
import {ItemList} from "./Itemlist"
import { products } from './Items'
import { useParams } from 'react-router-dom'
import loaderGid from "../assets/img/loader.gif"

export function ItemListContainer(props){

    const [items,setItem]=useState([])
    const [loader , setLoader] = useState(true)
    const { catId } = useParams()
    console.log(catId)


    useEffect( () => {
        setLoader(true)
        const bringProducts = new Promise ((resolve, reject) =>{
            setTimeout( ()=> {
                resolve(products)
            },200)
        })

        bringProducts
            .then((res)=> {
                catId ? setItem(res.filter((products) => products.category === catId))
                : setItem (res)
            })

        .catch((error)=>{
            console.log(error)

        })
        .finally( () => {
            setLoader(false)
        })

    }, [catId])     
  

    return loader ? (
        <div className="loader">
            <img  src={loaderGid} alt="" />
        </div>
    ) : (
        <div className="greetings">
            <ItemList items={items} />
            
        </div>
    )
}