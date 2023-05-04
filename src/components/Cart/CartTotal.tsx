import React, { useEffect, useState } from 'react'
import { kFormatter } from '../validation/isEmpty';
import { useSelector } from 'react-redux';

const CartTotal = () => {

    const cartData = useSelector((state: any) => state.cart.cart);

    const [cartItem, setCartItem] = useState<any>({
        items: [],
        total: "",
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('PRODUCT_SELECTED') || '{}');
        setCartItem(data)
    }, [cartData])

    return (
        <>
            {cartItem?.items?.length > 0 &&
                <div className="CartPayment">
                    <div className="CartPayment-title">
                        <p>Summary of your Purchase</p>
                    </div>
                    <div className="CartPayment-selected">
                        {cartItem === null ? "" :
                            cartItem.items.map((product: any) => (
                                <div className="CartPayment-selected__container" key={product.id}>
                                    <p className="CartPayment-selected__container-name">
                                        {product.name.split(" ").splice(0, 5).join(" ")}...
                                    </p>
                                    <p className="CartPayment-selected__container-units">
                                        {product.quantity}
                                        units
                                    </p>
                                    <h3 className="CartPayment-selected__container-price">
                                        {kFormatter(product.price)}
                                    </h3>
                                </div>
                            ))}
                    </div>
                    <div className="CartPayment-total">
                        <h3>Total :</h3>
                        <p>
                            {cartItem && kFormatter(cartItem.total)}
                        </p>
                    </div>
                    <div className="CartPayment-button">
                        <button
                            onClick={() => alert('This option is not available because these products are not real.')}
                        >Continue</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CartTotal