import { useCart } from '../hooks/useCart'
import { Filters } from './Filters'
import './Products.css'

export const Products = ({products}) => {

  const {addToCart, cart, removeFromCart, cartOpened, setCartOpened} = useCart()
  
  const toggleCartOpened = () => {
    setCartOpened(!cartOpened)
  }

  const checkProductInCart = product => {
    return cart.some(item => item.id == product.id)
  }


  return (
    <main>
      <section id='products' className='bg-[#151515]'>
        <div className="container pt-5 pb-20">
          <div className='flex flex-col md:flex-row gap-5 md:gap-0 items-center py-3 justify-between border-t-1 border-b-1'>
            <h2>Products</h2>
            <Filters/>
          </div>
          <ul className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            {
            products.map(product => {
              const isProductInCart = checkProductInCart(product)
              return  <li key={product.id}>
                    <picture>
                        <img className='h-[15rem] object-cover' src={product.thumbnail} alt={product.title} />
                    </picture>
                    <div className="product-content bg-[black] p-4 grid gap-2">
                        <h3 className='font-bold' >{product.title}</h3>
                        <span >${product.price}</span>
                        <button className='elastic-hover text-left border border-solid border-white w-[fit-content] rounded-[2rem] px-5 py-1' onClick={() => isProductInCart ? (removeFromCart(product), toggleCartOpened()) : (addToCart(product), toggleCartOpened())}>
                          {
                            isProductInCart ? 'Remove from cart' : 'Add to cart'
                          }
                        </button>
                    </div>
                </li>
            })
            
            }
          </ul>
        </div>
      </section>
      
    </main>
   
  )
}
