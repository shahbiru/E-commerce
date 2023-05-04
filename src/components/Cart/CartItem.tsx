import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { kFormatter } from '../validation/isEmpty';

const CartItem = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartData = useSelector((state: any) => state.cart.cart);

    const [cartItem, setCartItem] = useState<any>({
    items: [],
    total: "",
});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('PRODUCT_SELECTED') || '[]');
    if (data) {
      setCartItem(data)
     }
  },[cartData])

  const handleMenusProduct = (product: any) => {
    if(product.quantity === 1){
      handleDeleteProducts(product)
    }else{
    const updatedCartItems = cartItem.items.map((item: any) => {
      if (item.productId === product.productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    const data = {
      items: updatedCartItems,
      total: cartItem.total - Number(product.price),
    }
    localStorage.setItem('PRODUCT_SELECTED', JSON.stringify(data));
    dispatch({
      type: 'UPDATE_CART',
      payload: {
        ...data
      }
    })
  }
  }

  const handlePlusProduct = (product: any) => {
    const updatedCartItems = cartItem.items.map((item: any) => {
      if (item.productId === product.productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    const data = {
      items: updatedCartItems,
      total: cartItem.total + Number(product.price),
    }
    localStorage.setItem('PRODUCT_SELECTED', JSON.stringify(data));
    dispatch({
      type: 'UPDATE_CART',
      payload: {
        ...data
      }
    })
  }

  const handleDeleteProducts = (product: any) => {
    const values = cartItem.items.filter((item: any) => item.productId !== product.productId)
    const removedItem = cartItem.items.find((item: any) => item.productId === product.productId);
    const itemPrice = Number(removedItem.price) * Number(removedItem.quantity);
    const data = {
      items: values,
      total: cartItem.total - itemPrice,
    }
    localStorage.setItem('PRODUCT_SELECTED', JSON.stringify(data));
    dispatch({
      type: 'DELETE_CART',
      payload: {
        ...data
      }
    })
  }

  return (
    <div className="CartProducts">
      <div className="CartProducts-title">
        <p>Shoping Cart</p>
        {/* <span>{cartData ? cartData.items.length : ""}</span> */}
      </div>
      <a
        href="https://alicbm.github.io/todo-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
      {console.log(cartItem)}
      {cartItem?.items?.length <= 0 ? (
        <div className="CartProducts-not-product">
          <p>Empty shopping cart, add some products!</p>
          <button onClick={() => navigate("/home")}>See More</button>
        </div>
      ) : (
        cartItem.items.map((product: any) => (
          <div className="CartProducts-product" key={product.id}>
            <div className="CartProducts-product__img">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="CartProducts-product__features">
              <p className="CartProducts-product__features-brand">
                {product.brand}
              </p>
              <p className="CartProducts-product__features-name">
                {product.name}
              </p>
              <p className="CartProducts-product__features-price">
                An unit: <strong>$ {kFormatter(product.price)}</strong>
              </p>
            </div>
            <div
              onClick={() => handleDeleteProducts(product)}
              className="CartProducts-product__delete"
            >
              <p>Delete Item:</p>
              <span>
                <FaTrashAlt />
              </span>
            </div>
            <div className="CartProducts-product__add">
              <p>Number items:</p>
              <div className="CartProducts-product__add-buttons">
                <button
                  onClick={() => handleMenusProduct(product)}
                >
                  <FaMinus />
                </button>
                <span>
                  {product.quantity}
                </span>
                <button
                  onClick={() => handlePlusProduct(product)}
                >
                  <BiPlusMedical />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartItem