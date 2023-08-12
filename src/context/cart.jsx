import { createContext, useState } from "react";

export const cartContext = createContext()

const initialState = []
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':{
            
        }
    }
    return state
}


export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id == product.id)

        console.log(productInCartIndex)


        // Si el producto ya existe en el carrito se le agrega 1 a su cantidad
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
 
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        // Si el producto no existe en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    } 

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <cartContext.Provider
        value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </cartContext.Provider>
    )
} 
