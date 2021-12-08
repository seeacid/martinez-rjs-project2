import React, { useContext, useState } from 'react'

const CarContext = React.createContext()

export function CartProvider( {children} ){

    const [onCarItems , setOnCarItems] = useState([])
    const [onCarAdd , setOnCarAdd] = useState()
    const [totalPrice , setTotalPrice] = useState(0)
    const [carViewQnt , setCarViewQnt] = useState()

    const isOnCart = (product)=> {
        return onCarItems?.findIndex(item=> item.id === product.id)
    }


    const addTotalPrice = ()=> {
        
        let total = 0
        for (let i = 0; i < onCarItems.length; i++) {
            total = total + onCarItems[i].price*onCarItems[i].onCart
            console.log(total)
            setTotalPrice(total)
            console.log(`totalprice ${totalPrice}`)
        }
    }

    const addToCartx = (product,count) => {


        if(isOnCart(product) === -1){
            product.onCart=count
            setOnCarItems(onCarItems.concat(product))

        }else{
            for(let i = 0; i < onCarItems.length; i++){
                if(onCarItems[i].id === product.id){
                    onCarItems[i].onCart += count

                }
           }
            
        }
        
    }


    //REVISAR /////////////////////////////////////////////////////////////

    const cartViewCount = (product)=>{

        let onCarQnt = 0
        for(let i = 0; i < onCarItems.length; i++){
            if(onCarItems[i].id === product.id[i]){
              onCarQnt+=onCarItems[i].onCart 
              setCarViewQnt(onCarQnt)
              console.log(onCarQnt)
            }
       }
    }

    

    const deleteProduct = (product)=> {

        
        setOnCarItems(onCarItems.filter(item=> item.id !==product.id))
        setTotalPrice(totalPrice - (product.price*product.onCart))


    }

    const addOne = (product)=>{
        console.log(product)
        product.onCart+=1        
        setOnCarAdd(product.onCart)
    }

    const removeOne =(product)=>{
        console.log(product)
        product.onCart-=1        
        setOnCarAdd(product.onCart)
        if(product.onCart===0){
            product.onCart=1
        }
    }

    return(
        <CarContext.Provider value={{addToCartx , onCarItems ,deleteProduct,totalPrice,addTotalPrice,addOne,removeOne, cartViewCount ,carViewQnt}}>
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

export function useAddTotalPrice(){
    return useContext(CarContext).addTotalPrice
}

export function useTotalPrice(){
    return useContext(CarContext).totalPrice
}

export function useSetTotalPrice(){
    return useContext(CarContext).setTotalPrice
}

export function useAddOne(){
    return useContext(CarContext).addOne
}

export function useRemoveOne(){
    return useContext(CarContext).removeOne
}

export function useCartViewCount(){
    return useContext(CarContext).cartViewCount
}

export function useCarViewQnt(){
    return useContext(CarContext).carViewQnt
}

export default CarContext