import { cartContext } from "../context/cart";
import { useContext } from "react";

export const useCart = () => {
    const context = useContext(cartContext)

    if (context == undefined){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}