import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/action/product'
import { Cart } from '../../redux/reducer/cart'
import Womens from './Womens'
import Blog from './Blog'
import Carousel from '../../components/Carousel'
import Deal from '../../components/Deal'
import Footer from '../../components/Footer'
import Head from '../../components/Head'

const Product = () => {

  const product = useSelector((state: any) => state?.product?.product);
  const [cart, setCart] = useState<Cart | undefined>(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct(dispatch)
  }, []);

  return (
    <>
      <div className="App">
        <Head />
        <Carousel />
        <div className="banner-section spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="assets/img/banner-1.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Men’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="assets/img/banner-2.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Women’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="assets/img/banner-3.jpg" alt="" />
                  <div className="inner-text">
                    <h4>Kid’s</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Womens data={product} list={cart}/>
        {/* <Deal /> */}
        <div className="instagram-photo">
          <div className="insta-item set-bg" >
            <img src='assets/img/insta-1.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
             <img src='assets/img/insta-2.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
             <img src='assets/img/insta-3.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
             <img src='assets/img/insta-1.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
             <img src='assets/img/insta-2.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
             <img src='assets/img/insta-3.jpg'/>
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">crate_Collection</a></h5>
            </div>
          </div>
        </div>
        <Deal/>
        <Blog />
        <div className="partner-logo">
          <div className="container">
            <div className="logo-carousel owl-carousel">
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="assets/img/logo-1.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="assets/img/logo-2.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="assets/img/logo-3.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="assets/img/logo-4.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="assets/img/logo-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Product