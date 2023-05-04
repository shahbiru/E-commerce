import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { kFormatter } from './validation/isEmpty';

const Head = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState();
    const cartData = useSelector((state: any) => state.cart.cart);
    const [cartItem, setCartItem] = useState<any>({
        items: [],
        total: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        const data = JSON.parse(localStorage.getItem('PRODUCT_SELECTED') || '{}');
        if (data) {
            setCartItem(data)
        }
    }, [cartData]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('PRODUCT_SELECTED');
        navigate("/signin")
    };
    return (
        <>
            <header className="header-section">
                <div className="nav-item">
                    <div className="container">
                        <nav className="nav-menu mobile-menu">
                            <a className="navbar-brand" href="#">Crate</a>
                            <ul>
                                <li className="active"><a href="#" onClick={() => navigate("/home")}>Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Collection</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Men's</a></li>
                                        <li><a href="#">Women's</a></li>
                                        <li><a href="#">Kid's</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                {!user ?
                                    <>
                                        <li> <a href="#" className="login-panel" onClick={() => navigate("/signup")}><i className="fa fa-user"></i>Register</a></li>
                                        <li><a href="#" className="login-panel" onClick={() => navigate("/signin")}><i className="fa fa-user"></i>Login</a></li>
                                    </>
                                    :
                                    <li><a href="#" className="login-panel" onClick={() => handleLogout()}><i className="fa fa-user"></i>Logout</a></li>
                                }
                            </ul>
                        </nav>
                        <div id="mobile-menu-wrap"></div>

                    </div>
                    {user &&
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="cart-icon">
                                    <a onClick={() => navigate('/cart')}>
                                        <i className="icon_bag_alt"></i>
                                        <span>{Object.keys(cartItem).length > 0 ? cartItem.items.length : 0}</span>
                                    </a>
                                </li>
                                <li className="cart-price">${Object.keys(cartItem).length > 0 ? kFormatter(cartItem?.total) : 0}</li>
                            </ul>
                        </div>
                    }
                </div>
            </header>
        </>
    )
}

export default Head