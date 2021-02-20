import React from 'react'

export default function Footer() {
    return (
        <footer className="footer_style_2">
  <div className="container-fuild">
    <div className="row">
      <div className="map_section">
        <div id="map"></div>
      </div>
      <div className="footer_blog">
        <div className="row">
          <div className="col-md-6">
            <div className="main-heading left_text">
              <h2>It Next Theme</h2>
            </div>
            <p>Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.</p>
            <ul className="social_icons">
              <li className="social-icon fb"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li className="social-icon tw"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li className="social-icon gp"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="main-heading left_text">
              <h2>Additional links</h2>
            </div>
            <ul className="footer-menu">
              <li><a href="it_about.html"><i className="fa fa-angle-right"></i> About us</a></li>
              <li><a href="it_term_condition.html"><i className="fa fa-angle-right"></i> Terms and conditions</a></li>
              <li><a href="it_privacy_policy.html"><i className="fa fa-angle-right"></i> Privacy policy</a></li>
              <li><a href="it_news.html"><i className="fa fa-angle-right"></i> News</a></li>
              <li><a href="it_contact.html"><i className="fa fa-angle-right"></i> Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="main-heading left_text">
              <h2>Services</h2>
            </div>
            <ul className="footer-menu">
              <li><a href="it_data_recovery.html"><i className="fa fa-angle-right"></i> Data recovery</a></li>
              <li><a href="it_computer_repair.html"><i className="fa fa-angle-right"></i> Computer repair</a></li>
              <li><a href="it_mobile_service.html"><i className="fa fa-angle-right"></i> Mobile service</a></li>
              <li><a href="it_network_solution.html"><i className="fa fa-angle-right"></i> Network solutions</a></li>
              <li><a href="it_techn_support.html"><i className="fa fa-angle-right"></i> Technical support</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="main-heading left_text">
              <h2>Contact us</h2>
            </div>
            <p>123 Second Street Fifth Avenue,<br/>
              Manhattan, New York<br/>
              <span style={{fontSize:18}}><a href="tel:+9876543210">+987 654 3210</a></span></p>
            <div className="footer_mail-section">
              <form>
                <fieldset>
                <div className="field">
                  <input placeholder="Email" type="text"/>
                  <button className="button_custom"><i className="fa fa-envelope" aria-hidden="true"></i></button>
                </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="cprt">
        <p>ItNext © Copyrights 2019 Design by html.design</p>
      </div>
    </div>
  </div>
</footer>
    )
}
