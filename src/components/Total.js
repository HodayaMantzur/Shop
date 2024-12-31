import React, { useContext } from 'react'
import CartCotext from '../CartContext'

function Total() {
  const { cart, setCart} = useContext(CartCotext) // eslint-disable-line no-unused-vars

  return (
    <div>Total:{cart.length}
    <br/>
    Total Sum: {cart.reduce((acc, product) => acc + product.price, 0)}
    </div>
  )
}

export default Total