import React, { useContext, useState } from 'react'

const CarContext = React.createContext()

export function CartProvider( {children} ){

    const [onCarItems , setOnCarItems] = useState([])
    const [onCarCount , setOnCarCount] = useState()
    

    const isOnCart = (product)=> {
        return onCarItems?.findIndex(item=> item.id === product.id)
    }

    const addToCartx = (product,count) => {
        if(isOnCart(product) === -1){
            product.onCart=count
            setOnCarItems(onCarItems.concat(product))
            
        }else{
            for(let i = 0; i < onCarItems.length; i++){
                console.log(onCarItems[i])
                if(onCarItems[i].id === product[i].id){
                    let newcount = onCarItems[i].onCart + count
                    onCarItems[i].onCart = newcount
                    console.log(onCaritems[i].onCart)

                }
           }
            
        }

    }

    const deleteProduct = (product)=> {

        setOnCarItems(onCarItems.filter(item=> item.id !==product.id))

    }

    console.log(onCarItems)


    return(
        <CarContext.Provider value={{addToCartx , onCarItems ,deleteProduct}}>
            {children}
        </CarContext.Provider>
    )

    
   

    
}

export function useAddtoCartx() {
    return useContext(CarContext).addToCartx
}

export function useOnCarItems(){
    return useContext(CarContext).onCarItems
}

export function useDeleteProduct(){
    return useContext(CarContext).deleteProduct
}

export function useOnCarCount(){
    return useContext(CarContext).onCarCount
}

export default CarContext