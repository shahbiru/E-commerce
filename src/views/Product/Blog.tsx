import React from 'react'

const Blog = () => {
  return (
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
                  <i className="fa fa-calendar-o"></i>{" "}
                  May 4,2021
                </div>
                <div className="tag-item">
                  <i className="fa fa-comment-o"></i>{" "}
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
                  <i className="fa fa-calendar-o"></i>{" "}
                  May 4,2021
                </div>
                <div className="tag-item">
                  <i className="fa fa-comment-o"></i>{" "}
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
                  <i className="fa fa-calendar-o"></i>{" "}
                  May 4,2021
                </div>
                <div className="tag-item">
                  <i className="fa fa-comment-o"></i>{" "}
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
                <p>For all order over 99</p>
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
  )
}

export default Blog