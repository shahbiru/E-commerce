import React, { FC, useState } from 'react'
import { Product } from '../redux/reducer/product'
import { CartItem } from '../redux/reducer/cart'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

interface EditModalProps {
    data: any | undefined;
    list: any
}

const SelectedProduct: FC<EditModalProps> = ({
    data,
    list
}) => {
    const [cart, setCart] = useState({
        items: list?.items ? list?.items : [],
        total: list?.total ? list?.total : "",
    })

    const dispatch = useDispatch();

    const handleCartProducts = (product: Product) => {
        const existingItem = cart.items.find((item: any) => item.productId === product.id);

        if (existingItem) {
            // If the product is already in the cart, update the quantity
            const updatedItems = cart.items.map((item: any) => {
                if (item.productId === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            const updatedTotal = Number(cart.total) + Number(product.productPrice);
            setCart({ items: updatedItems, total: updatedTotal });
        } else {
            // If the product is not yet in the cart, add it as a new item
            const newItem: CartItem = {
                productId: product.id,
                name: product.productName,
                brand: product.productBrand,
                img: product.productImg,
                price: product.productPrice,
                quantity: 1,
            };

            const updatedItems = [...cart.items, newItem];
            const updatedTotal = Number(cart.total) + Number(product.productPrice);

            setCart({ items: updatedItems, total: updatedTotal });

            const data = {
                items: updatedItems,
                total: updatedTotal,
            }
            localStorage.setItem('PRODUCT_SELECTED', JSON.stringify({...data}));
            dispatch({
                type: 'ADD_CART',
                payload: {
                    ...data
                }
            })
        }
    }

    return (
        <>
            <div className="Recommendations">
                <h2 className="Recommendations-title">Product List</h2>
                <div className="Recommendations-container">
                    {data?.map((product: any) => (
                        <>
                            <div className="Recommendations-container__products" key={data.id}>
                                <div className="Recommendations-container__products-img">
                                    <img
                                        src={product.productImg}
                                        alt={product.productBrand}
                                    />
                                </div>
                                <div >
                                    <p className="Recommendations-container__products-brand">
                                        {product.productBrand}
                                    </p>
                                    <p className="Recommendations-container__products-name">
                                        {product.productName}
                                    </p>
                                    <h4 className="Recommendations-container__products-price">
                                        price: {product.productPrice}
                                    </h4>
                                </div>
                                <div
                                    onClick={() => handleCartProducts(product)}
                                    className="Recommendations-container__products-cart"
                                >
                                    <BsFillCartPlusFill />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SelectedProduct