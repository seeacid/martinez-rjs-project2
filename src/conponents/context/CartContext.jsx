import React, { useContext, useState } from 'react'

const CarContext = React.createContext()

export function CartProvider( {children} ){

    const [onCarItems , setOnCarItems] = useState([])
    const [onCarAdd , setOnCarAdd] = useState()
    const [totalPrice , setTotalPrice] = useState(0)
    const [carViewQnt , setCarViewQnt] = useState(0)
    const [carDisplay , setCarDisplay] = useState(false)
    const [btnState , setBtnState] = useState(false)
    const [modalState, setModalState] = useState(false)


    const isOnCart = (product)=> {
        return onCarItems?.findIndex(item=> item.id === product.id)
    }


    const addTotalPrice = ()=> {
        
        let total = 0
        for (let i = 0; i < onCarItems.length; i++) {
            total = total + onCarItems[i].price*onCarItems[i].onCart
            setTotalPrice(total)
        }
    }

    const addToCartx = (product,count) => {


        if(isOnCart(product) === -1){
            product.onCart=count
            setOnCarItems(onCarItems.concat(product))
            cartViewCount(product)


        }else{
            for(let i = 0; i < onCarItems.length; i++){
                if(onCarItems[i].id === product.id){
                    onCarItems[i].onCart += count

                }
           }

        }

        cartViewCount(product)
        upCarDisplay()
        changeBtnStatus(product)

        
    }


    const changeBtnStatus = (product)=>{
        if(product.onCart !== 0){
            setBtnState(true)

        }else{
            setBtnState(false)
        }
    }


    const cartViewCount = (product)=>{

        let onCarQnt = 0

        if(onCarItems.length === 0){

            onCarQnt= product.onCart
            setCarViewQnt(onCarQnt)
            upCarDisplay()


        }else{
            for(let i = 0; i < onCarItems.length; i++){
            
                onCarQnt+=onCarItems[i].onCart 
                setCarViewQnt(onCarQnt)
            }
        }

        
         
    }

    

    const deleteProduct = (product)=> {

        
        setOnCarItems(onCarItems.filter(item=> item.id !==product.id))
        setTotalPrice(totalPrice - (product.price*product.onCart))
        setCarViewQnt(carViewQnt - product.onCart)
        if(onCarItems.length===1){
            setCarDisplay(false)
            setBtnState(false)

        }

        
    }

    const addOne = (product)=>{
        product.onCart+=1        
        setOnCarAdd(product.onCart)
        cartViewCount(product)
    }

    const removeOne =(product)=>{
        product.onCart-=1        
        setOnCarAdd(product.onCart)
        if(product.onCart===0){
            product.onCart=1
        }
        cartViewCount(product)

    }

    const upCarDisplay = ()=>{
        setCarDisplay(true)      
    }

    const opClModal = ()=>{
        setModalState(!modalState)
        console.log(modalState)
    }

    

    return(
        <CarContext.Provider value={{addToCartx , onCarItems ,deleteProduct,totalPrice,addTotalPrice,addOne,removeOne, cartViewCount ,carViewQnt, carDisplay, btnState,opClModal,modalState}}>
            {children}
        </CarContext.Provider>
    )

    
    
    
    
   

    
}

export function useBtnState(){
    return useContext(CarContext).btnState
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

export function useCarDisplay(){
    return useContext(CarContext).carDisplay
}

export function useOpClModal(){
    return useContext(CarContext).opClModal
}

export function useModalState() {
    return useContext(CarContext).modalState

    
}





export default CarContext