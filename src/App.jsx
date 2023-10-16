import { useContext, useState } from 'react'
import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import HeroSection from './components/HeroSection'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/UseFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
import './index.css'
import { useCart } from './hooks/useCart'


function App() {
  
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <div className="relative">
      <CartProvider>
        <Header />
        <HeroSection />
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </div>
    
  )
}

export default App
