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

    useEffect(() => {
        setLoader(true);
        const myItems = catId
          ? query(collection(db, 'products'), where('category', '==', catId))
          : collection(db, 'products');
    
        getDocs(myItems)
          .then((res) => {
            const results = res.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
    
            setItem(results);
          })
          .finally(() => setLoader(false));
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