import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='back-button'>
        <button type='button' className='label' onClick={() => navigate("/home")}>Back</button>
      </div>
      <div className='Cart'>
        <div className="Cart-container">
          <div className="Cart-container__content">
            <CartItem />
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart