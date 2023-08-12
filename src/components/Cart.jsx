import { useId } from "react"
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from "../hooks/useCart"




const CartItem = ({thumbnail, price, title, quantity, addToCart}) => {

    return(
        <li>
            <picture>
                <img src={thumbnail} alt={title} /> 
            </picture>
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
   
}



export const Cart = () => {

   const cartButtonId = useId()
   const {cart, clearCart, addToCart} = useCart()

   console.log('mostrando:', cart, clearCart)

  return (

    <>
        <label  htmlFor={cartButtonId}>
            <FaShoppingCart/>
        </label>
        <input  type={"checkbox"} hidden id={cartButtonId} />
        <aside className="cart">
            <ul>
                {
                    cart.map(product => {
                        return <CartItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}  />
                    })
                }
            </ul>
            <button onClick={clearCart}>Clear cart</button>
        </aside>
    </>
 
  )
}
