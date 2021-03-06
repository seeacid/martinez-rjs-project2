import './App.css';
import { Header } from "./conponents/header/Header"
import {ItemListContainer} from "./conponents/itemListContainer/itemListContainer"
import {ItemDetailContainer} from "./conponents/ItemDetailContainer/ItemDetailContainer"
import { Cart } from './conponents/carWidget/Cart';
import {BrowserRouter , Routes , Route } from "react-router-dom"
import {CartProvider} from "./conponents/context/CartContext"
import React from 'react'
import {Footer} from "./conponents/footer/Footer"

function App() {

    


    return (
        <BrowserRouter>
            <CartProvider>
                <Header />


                <Routes>


                    <Route path="/" element={<ItemListContainer />} />

                    <Route path="/category/:catId" element={<ItemListContainer />} />

                    <Route path="/product/:prodId" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />


                </Routes>
            </CartProvider>
            <Footer />
        </BrowserRouter> 
        
    
    );
}

export default App;