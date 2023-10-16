import { useId } from "react"
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from "../hooks/useCart"




const CartItem = ({thumbnail, price, title, quantity, addToCart}) => {

    return(
        <li className="flex gap-6 justify-between border-b-1 border-black">
            <picture className='border-r-1 w-[8rem] h-[8rem] border-black'>
                <img className="object-cover h-full" src={thumbnail} alt={title} /> 
            </picture>
            <div className="flex items-end flex-col pr-5 justify-between">
                <div className="pt-2">
                    <strong className="text-black block">{title}</strong> - ${price}
                </div>
                <footer className="flex items-center gap-2 pb-2" >
                    <small className="text-black">
                        Qty: {quantity}
                    </small>
                    <button className="text-black" onClick={addToCart}>+</button>
                </footer>
            </div>
        </li>
    )
   
}



export const Cart = () => {

   const {cart, clearCart, addToCart, cartOpened, setCartOpened} = useCart()

   console.log('mostrando:', cart, clearCart)

   const getTotal = () => {
    const total = cart.reduce((acc, product) => {
      // Multiplicamos el precio del producto por la cantidad y sumamos al acumulador
      return acc + product.price * product.quantity;
    }, 0);
  
    return total;
    };
    
   const closeCart = () => {
    setCartOpened(false)
   }

  return (
    <>
        <aside className={`z-50 transition duration-[.45s] ease-[cubic-bezier(0.45, 0, 0.55, 1)] cart fixed bg-white h-screen w-3/4 lg:w-[30%] ${cartOpened ? 'translate-x-[0]': 'translate-x-[100%]'} top-0 right-0 z-50 py-6 `}>
            <div className="cart-header px-5 flex justify-between pb-4 border-b-1 border-black">
                <span className="text-black block">{`Items: (${cart.length})`}</span>
                <span onClick={closeCart} className="uppercase cursor-pointer text-black block">Close</span>
            </div>
            <ul className="grid">
                {
                    cart.map(product => {
                        return <CartItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}  />
                    })
                }
            </ul>
            <div className="flex justify-between my-2 px-4">
                <button className="text-black" onClick={clearCart}>Clear cart</button>
                <span className="text-black">Subtotal: <span className="text-bold text-black">{getTotal()}</span></span>
            </div>           
        </aside>
        <div onClick={closeCart} className={`absolute inset-0 bg-black ${cartOpened ? 'opacity-50 ': 'opacity-[0] pointer-events-none'} z-40`}></div>
    </>
  )
}
