import React , {useState,useEffect} from 'react'
import loaderGif from "../assets/img/loader.gif"
import { products } from "../itemListContainer/Items"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router'
import { doc , getDoc} from "firebase/firestore"
import db from '../firebase/firebase'



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader , setLoader] = useState(true)
    const [goCart , setGocart ] = useState(false)
    const { prodId } = useParams()
    console.log(useParams )
    let productoss = []

    useEffect(() => {
        setLoader(true);

        const myItem = doc(db, 'products', prodId);
    
        getDoc(myItem)
          .then((res) => {
            const result = { id: res.id, ...res.data() };
            setProduct(result);
            console.log(product)
            console.log(res.data())
          })
          .finally(() => {
            setLoader(false);
          });
          
         
         
         
      }, []);
    

   

    const addToCart = (cantidad) => {
        console.log({...product , Oncart: cantidad})
        setGocart(true)

        
    }

    return loader ? (
        <div className="loader">
            <img  src={loaderGif} alt="" />
        </div>
    ) : ( <ItemDetail   {...product}  addToCart={addToCart} goCart={goCart} /> )
}