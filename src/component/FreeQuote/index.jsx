import React from 'react'
import ligit from '../../assets/images/it_service/phone_icon.png'

export default function FreeQuote() {
    return (
        <div className="section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="contact_us_section">
            <div className="call_icon"> <img src={ligit} alt="#" /> </div>
            <div className="inner_cont">
              <h2>REQUEST A FREE QUOTE</h2>
              <p>Get answers and advice from people you want it from.</p>
            </div>
            <div className="button_Section_cont"> <a className="btn dark_gray_bt" href="it_contact.html">Contact us</a> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
