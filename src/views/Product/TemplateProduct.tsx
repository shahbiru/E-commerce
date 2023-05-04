import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../redux/action/product'

const Product = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct(dispatch)
  }, []);

  return (
    <>
      <div className="App">
        <header className="header-section">
          <div className="header-top">
            <div className="container">
              <div className="ht-left">
                <div className="mail-service">
                  <i className=" fa fa-envelope"></i>
                  therichposts@gmail.com
                </div>
                <div className="phone-service">
                  <i className=" fa fa-phone"></i>
                  +00 00.000.000
                </div>
              </div>
              <div className="ht-right">
                <a href="#" className="login-panel"><i className="fa fa-user"></i>Login</a>
                <div className="lan-selector">
                  <select className="language_drop" name="countries" id="countries" style={{ width: "300px" }}>
                    <option value='yt' data-image="assets/img/flag-1.jpg" data-imagecss="flag yt"
                      data-title="English">English</option>
                    <option value='yu' data-image="assets/img/flag-2.jpg" data-imagecss="flag yu"
                      data-title="Bangladesh">German </option>
                  </select>
                </div>
                <div className="top-social">
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                  <a href="#"><i className="ti-linkedin"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="inner-header">
              <div className="row">
                <div className="col-lg-2 col-md-2">
                  <div className="logo">
                    <a href="#">
                      Jassa Shop
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="advanced-search">
                    <button type="button" className="category-btn">All Categories</button>
                    <div className="input-group">
                      <input type="text" placeholder="What do you need?" />
                      <button type="button"><i className="ti-search"></i></button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-right col-md-3">
                  <ul className="nav-right">
                    <li className="heart-icon">
                      <a href="#">
                        <i className="icon_heart_alt"></i>
                        <span>1</span>
                      </a>
                    </li>
                    <li className="cart-icon">
                      <a href="#">
                        <i className="icon_bag_alt"></i>
                        <span>3</span>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr>
                                <td className="si-pic"><img src="assets/img/select-product-1.jpg" alt="" /></td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <p>$60.00 x 1</p>
                                    <h6>Kabino Bedside Table</h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <i className="ti-close"></i>
                                </td>
                              </tr>
                              <tr>
                                <td className="si-pic"><img src="assets/img/select-product-2.jpg" alt="" /></td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <p>$60.00 x 1</p>
                                    <h6>Kabino Bedside Table</h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  <i className="ti-close"></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>$120.00</h5>
                        </div>
                        <div className="select-button">
                          <a href="#" className="primary-btn view-card">VIEW CARD</a>
                          <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                        </div>
                      </div>
                    </li>
                    <li className="cart-price">$150.00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <div className="container">
              <nav className="nav-menu mobile-menu">
                <ul>
                  <li className="active"><a href="#">Home</a></li>
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
                </ul>
              </nav>
              <div id="mobile-menu-wrap"></div>
            </div>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-items owl-carousel">
            <div className="single-hero-items set-bg" data-setbg="assets/img/hero-1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore</p>
                    <a href="#" className="primary-btn">Shop Now</a>
                  </div>
                </div>
                <div className="off-card">
                  <h2>Sale <span>50%</span></h2>
                </div>
              </div>
            </div>
            <div className="single-hero-items set-bg" data-setbg="assets/img/hero-2.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore</p>
                    <a href="#" className="primary-btn">Shop Now</a>
                  </div>
                </div>
                <div className="off-card">
                  <h2>Sale <span>50%</span></h2>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="women-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="product-large set-bg" data-setbg="assets/img/women-large.jpg">
                  <h2>Women’s</h2>
                  <a href="#">Discover More</a>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/women-1.jpg" alt="" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/women-2.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">
                        $13.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/women-3.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/women-4.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="deal-of-week set-bg spad" data-setbg="assets/img/time-bg.jpg">
          <div className="container">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Deal Of The Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                  consectetur adipisicing elit </p>
                <div className="product-price">
                  $35.00
                  <span>/ HanBag</span>
                </div>
              </div>
              <div className="countdown-timer" id="countdown">
                <div className="cd-item">
                  <span>56</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>12</span>
                  <p>Hrs</p>
                </div>
                <div className="cd-item">
                  <span>40</span>
                  <p>Mins</p>
                </div>
                <div className="cd-item">
                  <span>52</span>
                  <p>Secs</p>
                </div>
              </div>
              <a href="#" className="primary-btn">Shop Now</a>
            </div>
          </div>
        </section>

        <section className="man-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/man-1.jpg" alt="" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/man-2.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Shoes</div>
                      <a href="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">
                        $13.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/man-3.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="assets/img/man-4.jpg" alt="" />
                      <div className="icon">
                        <i className="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="product-large set-bg m-large" data-setbg="assets/img/man-large.jpg">
                  <h2>Men’s</h2>
                  <a href="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="instagram-photo">
          <div className="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-1.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-2.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
          <div className="insta-item set-bg" data-setbg="assets/img/insta-3.jpg">
            <div className="inside-text">
              <i className="ti-instagram"></i>
              <h5><a href="#">jassa_Collection</a></h5>
            </div>
          </div>
        </div>

        <section className="latest-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="assets/img/latest-1.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o"></i>
                        May 4,2021
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o"></i>
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>The Best Street Style From London Fashion Week</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="assets/img/latest-2.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o"></i>
                        May 4,2021
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o"></i>
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>Vogue's Ultimate Guide To Autumn/Winter 2021 Shoes</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-latest-blog">
                  <img src="assets/img/latest-3.jpg" alt="" />
                  <div className="latest-text">
                    <div className="tag-list">
                      <div className="tag-item">
                        <i className="fa fa-calendar-o"></i>
                        May 4,2021
                      </div>
                      <div className="tag-item">
                        <i className="fa fa-comment-o"></i>
                        5
                      </div>
                    </div>
                    <a href="#">
                      <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                    </a>
                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefit-items">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="assets/img/icon-1.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Free Shipping</h6>
                      <p>For all order over 99<pre wp-pre-tag-2=""></pre>lt;</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="assets/img/icon-2.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Delivery On Time</h6>
                      <p>If good have prolems</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="assets/img/icon-1.png" alt="" />
                    </div>
                    <div className="sb-text">
                      <h6>Secure Payment</h6>
                      <p>100% secure payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-left">
                  <div className="footer-logo">
                    <a href="#">Jassa</a>
                  </div>
                  <ul>
                    <li>Address: 11-11 Road 11 22 22</li>
                    <li>Phone: +00 00.000.000</li>
                    <li>Email: therichposts@gmail.com</li>
                  </ul>
                  <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <div className="footer-widget">
                  <h5>Information</h5>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Serivius</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <h5>My Account</h5>
                  <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">Shop</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="newslatter-item">
                  <h5>Join Our Newsletter Now</h5>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <form action="#" className="subscribe-form">
                    <input type="text" placeholder="Enter Your Mail" />
                    <button type="button">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-reserved">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text">

                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://therichpost.com" target="_blank">Jassa</a>

                  </div>
                  <div className="payment-pic">
                    <img src="assets/img/payment-method.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>



      </div>
    </>
  )
}

export default Product