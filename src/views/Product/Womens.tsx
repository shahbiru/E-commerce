import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../redux/reducer/product';
import { CartItem } from '../../redux/reducer/cart';
import { toast } from "react-toastify";
import { kFormatter } from '../../components/validation/isEmpty';

interface EditModalProps {
    data: any | undefined;
    list: any
}

const Womens: FC<EditModalProps> = ({ data, list }) => {

    const [cart, setCart] = useState({
        items: list?.items ? list?.items : [],
        total: list?.total ? list?.total : "",
    })

    useEffect(() => {
        if(localStorage.getItem('PRODUCT_SELECTED')){
        let data = JSON.parse(localStorage.getItem('PRODUCT_SELECTED') || '{}');
        setCart(data)
        }
    }, [])

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
            localStorage.setItem('PRODUCT_SELECTED', JSON.stringify(data));
            dispatch({
                type: 'ADD_CART',
                payload: {
                    ...data
                }
            })
        }
        toast.success("Product added to cart successfully");
    }

    return (
        <>
            <section className="women-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-1">
                            <div className='owl'>
                                {data.map((item: any) => {
                                    return (
                                        <>
                                            <div className='owl-item cloned resize' key={item.productId}>
                                                <div className="product-item">
                                                    <div className="pi-pic">
                                                        <img src={item.productImg} alt="" />
                                                        <div className="icon">
                                                            <i className="icon_heart_alt"></i>
                                                        </div>
                                                        <ul>
                                                            <li className="w-icon active"><button><i className="icon_bag_alt"></i></button></li>
                                                            <li className="quick-view"><button onClick={() => handleCartProducts(item)}>Add To Cart</button></li>
                                                            <li className="w-icon"><button><i className="fa fa-random"></i></button></li>
                                                        </ul>
                                                    </div>
                                                    <div className="pi-text">
                                                        <div className="catagory-name">{item.productBrand}</div>
                                                        <a href="#">
                                                            <h5>{item.productName}</h5>
                                                        </a>
                                                        <div className="product-price">
                                                            ${kFormatter(Number(item.productPrice))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Womens