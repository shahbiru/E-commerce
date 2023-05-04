import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs'

const Header = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('PRODUCT_SELECTED');
    navigate("/signin")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Crate</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Man</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">How it works</a>
              </li>
            </ul>
            <form className="d-flex">
              {!user ?
                <>
                  <button className="header-button me-2" type="submit" onClick={() => navigate("/signup")}>Signup</button>
                  <button className="header-button" type="submit" onClick={() => navigate("/signin")}>Login</button>
                </>
                :
                <>
                  <div
                    className="Header-cart icon-green"
                    onClick={() => navigate('/cart')}
                  >
                    <span></span>
                    <BsFillCartPlusFill />
                  </div>
                  <button className="header-button" type="submit" onClick={() => handleLogout()}>Logout</button>
                </>
              }
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header