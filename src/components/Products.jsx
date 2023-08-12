import { useCart } from '../hooks/useCart'
import './Products.css'

export const Products = ({products}) => {

  const {addToCart, cart, removeFromCart} = useCart()
  console.log(cart)

  const checkProductInCart = product => {
    return cart.some(item => item.id == product.id)
  }


  return (
    <ul>
        {
        products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return  <li key={product.id}>
                <picture>
                    <img src={product.thumbnail} alt={product.title} />
                </picture>
                <div className="product-content">
                    <h3>{product.title}</h3>
                    <span>${product.price}</span>
                    <button onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                      {
                        isProductInCart ? 'Remove from cart' : 'Add to cart'
                      }
                    </button>
                </div>
            </li>
        })
        
        }
    </ul>
  )
}
