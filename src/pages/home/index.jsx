import { useState } from 'react'
import ShoppingCart from '../../components/shoppingcart'
import ShoppingCartItems from '../../components/shoppingcartitems'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingCart />
    
    <ShoppingCartItems />
   </>
  )
}

export default Home
