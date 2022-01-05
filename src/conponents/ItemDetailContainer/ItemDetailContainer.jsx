import React , {useState,useEffect} from 'react'
import loaderGif from "../assets/img/loader.gif"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router'
import { doc , getDoc} from "firebase/firestore"
import {useAddtoCartx , useCartViewCount} from '../context/CartContext'
import db from '../firebase/firebase'



export const ItemDetailContainer = () => {
    const cartViewCount = useCartViewCount()
    const addToCartx = useAddtoCartx()
    const [product, setProduct] = useState({})
    const [loader , setLoader] = useState(true)
    const [goCart , setGocart ] = useState(false)
    const { prodId } = useParams()


    cartViewCount()


    useEffect(() => {
        setLoader(true);

        const myItem = doc(db, 'products', prodId);
    
        getDoc(myItem)
          .then((res) => {
            const result = { id: res.id, ...res.data() };
            setProduct(result);
          })
          .finally(() => {
            setLoader(false);
          });
          
         
         
         
      }, []);
    

   

    const addToCart = (cantidad) => {

        addToCartx(product,cantidad)
        setGocart(true)

        
    }

    return loader ? (
        <div className="loader">
            <img  src={loaderGif} alt="" />
        </div>
    ) : ( <ItemDetail   {...product}  addToCart={addToCart} goCart={goCart} /> )
}