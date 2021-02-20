import React, { PureComponent } from 'react'
import logo from "../../assets/images/logos/it_logo.png"

export default class  Header extends PureComponent {
  render() {
    return (
      <div>
             <div className="bg_load"> <img className="loader_animation" src="images/loaders/loader_1.png" alt="#" /> </div>
{/* <!-- end loader --> */}
{/* <!-- header --> */}
  <header id="default_header" className="header_style_1">
    {/* <!-- header top --> */}
     <div className="header_top">
       <div className="container">
        <div className="row">
         <div className="col-md-8">
          <div className="full">
            <div className="topbar-left">
              <ul className="list-inline">
                <li> <span className="topbar-label"><i className="fa  fa-home"></i></span> <span className="topbar-hightlight">540 Lorem Ipsum New York, AB 90218</span> </li>
                <li> <span className="topbar-label"><i className="fa fa-envelope-o"></i></span> <span className="topbar-hightlight"><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></span> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 right_section_header_top">
          <div className="float-left">
            <div className="social_icon">
              <ul className="list-inline">
                <li><a className="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" >d</a></li>
                <li><a className="fa fa-google-plus" href="https://plus.google.com/" title="Google+" >d</a></li>
                <li><a className="fa fa-twitter" href="https://twitter.com" title="Twitter" >d</a></li>
                
                <li><a className="fa fa-instagram" href="https://www.instagram.com" title="Instagram" >d</a></li>
              </ul>
            </div>
          </div>
          <div className="float-right">
            <div className="make_appo"> <a className="btn white_btn" href="make_appointment.html">Make Appointment</a> </div>
          </div>
        </div>
      </div>
    </div>
          </div>  
          <div className="header_bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
          {/* <!-- logo start --> */}
          <div className="logo"> <a href="it_home.html"><img src={logo} alt="logo" /></a> </div>
          {/* <!-- logo end --> */}
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          {/* <!-- menu start --> */}
          <div className="menu_side">
            <div id="navbar_menu">
              <ul className="first-ul">
                <li> <a className="active" href="/">Home</a>
                  <ul>
                    <li><a href="/">It Home Page</a></li>
                    <li><a href="it_home_dark.html">It Dark Home Page</a></li>
                  </ul>
                </li>
                <li><a href="about">About Us</a></li>
                <li> <a href="service">Service</a>
                  <ul>
                    <li><a href="service">Services list</a></li>
                    <li><a href="it_service_detail.html">Services Detail</a></li>
                  </ul>
                </li>
                <li> <a href="it_blog.html">Blog</a>
                  <ul>
                    <li><a href="it_blog.html">Blog List</a></li>
                    <li><a href="it_blog_grid.html">Blog Grid</a></li>
                    <li><a href="it_blog_detail.html">Blog Detail</a></li>
                  </ul>
                </li>
                <li> <a href="#d">Pages</a>
                  <ul>
                    <li><a href="it_career.html">Career</a></li>
                    <li><a href="it_price.html">Pricing</a></li>
                    <li><a href="it_faq.html">Faq</a></li>
                    <li><a href="it_privacy_policy.html">Privacy Policy</a></li>
                    <li><a href="it_error.html">Error 404</a></li>
                  </ul>
                </li>
                <li> <a href="it_shop.html">Shop</a>
                  <ul>
                    <li><a href="it_shop.html">Shop List</a></li>
                    <li><a href="it_shop_detail.html">Shop Detail</a></li>
                    <li><a href="it_cart.html">Shopping Cart</a></li>
                    <li><a href="it_checkout.html">Checkout</a></li>
                  </ul>
                </li>
                <li> <a href="it_contact.html">Contact</a>
                  <ul>
                    <li><a href="it_contact.html">Contact Page 1</a></li>
                    <li><a href="it_contact_2.html">Contact Page 2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="search_icon">
              <ul>
                <li><a href="#d" data-toggle="modal" data-target="#search_bar"><i className="fa fa-search" aria-hidden="true"></i>search</a></li>
              </ul>
            </div>
          </div>
          {/* <!-- menu end --> */}
        </div>
      </div>
    </div>
          </div>
          </header>
     </div> 
    )
  }
}