import { useContext } from "react";
import  Products from "../../conponents/context/ContextProducts"
import { Item } from "../itemListContainer/Item"



   export function ProductList(){
    const {products} = useContext(Products)

    return(
        <div>
            {
                products?.map((product)=>{
                    return(
                        <Item key={product.id} product={product} />
                    )
                } )
            }
        </div>
    )



}

export default ProductList