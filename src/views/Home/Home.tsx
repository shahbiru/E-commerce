import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import SelectedProduct from '../../components/SelectedProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/action/product'
import { Cart } from '../../redux/reducer/cart'

const Home = () => {

  const product = useSelector((state: any) => state?.product?.product);
  const [cart, setCart] = useState<Cart | undefined>(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct(dispatch)
  }, []);

  return (
    <>
    <Header/>
    <div className='back-button'>
    <button type='button' className='label'>Back</button>
    </div>
    <div className="SelectedProduct">
      <div className="SelectedProduct-container">
        <SelectedProduct data={product} list={cart}/>
      </div>
    </div>
    </>
  )
}

export default Home