import { useEffect } from "react"
import { useCart } from "../hooks/useCart"



export const Header = () => {

  const {cart, cartOpened, setCartOpened} = useCart()

  const openCart = () => {
    setCartOpened(true)
  }
  
  useEffect(() => {

    window.onscroll = function () {
        const scroll = window.scrollY

        if (scroll > 0) {
            document.querySelector("header").classList.add("scrolled");
        } else {
            document.querySelector("header").classList.remove("scrolled");
        }
    };

  }, []);

  return (
    <header className=" duration-500 fixed w-[100%] pt-8 left-0 z-30">
      <div className="container flex justify-between border-b-0.7 border-[lightgrey]  pb-2">
        <h1 className="hidden md:block">Shopping Cart</h1>
        <p className="flex gap-1">Made by <a className="ml-[.2rem] font-bold slide-link" target="_blank" href="https://gonzalobordes.com.ar/">
        <span className="font-bold">
          Gonza Bordes
        </span>
        <span className="font-bold">
          Gonza Bordes
        </span>  
        </a></p>
        <button onClick={openCart} className="cart-button slide-link">
          <span>
            Cart <b className="cart-items">{`(${cart.length})`}</b>
          </span>
          <span>
            Cart <b className="cart-items">{`(${cart.length})`}</b>
          </span>
        </button>
      </div>        
    </header>

  )
}
