import React, {useState, useEffect} from 'react'
import "./index.css"
import {ItemList} from "./Itemlist"
import { useParams } from 'react-router-dom'
import loaderGid from "../assets/img/loader.gif"
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase'

export function ItemListContainer(props){

    const [items,setItem]=useState([])
    const [loader , setLoader] = useState(true)
    const { catId } = useParams()
    let productoss = []

    useEffect(() => {
        setLoader(true)
        const ref = collection(db , "products")
        getDocs(ref)
            .then((snapshot)=> {
                productoss = snapshot.docs.map((doc)=>doc.data())
                console.log(productoss)
             })
            .then(()=>{
                catId ? setItem(productoss.filter((prod)=> productoss.category === catId))
                : setItem(productoss)
                console.log(items)
            })
            .finally( () => {
                setLoader(false)
            })
      }, [catId]);


   

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