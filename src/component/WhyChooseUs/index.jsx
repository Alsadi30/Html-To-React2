import React from 'react'
import itimg from '../../assets/images/it_service/i1.png'
import itimg1 from '../../assets/images/it_service/i2.png'
import itimg2 from '../../assets/images/it_service/i3.png'
import itimg3 from '../../assets/images/it_service/i4.png'



export default function WhyChUs() {
    return (
   
           <div>
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_center">
            <h2>Why Choose Us</h2>
            <p className="large">Fastest repair service with best price!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="full text_align_center margin_bottom_30">
          <div className="center">
            <div className="icon"> <img src={itimg} alt="#" /> </div>
          </div>
          <h4 className="theme_color">Data recovery</h4>
          <p>Perspiciatis eos quos totam cum minima aut!</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="full text_align_center margin_bottom_30">
          <div className="center">
            <div className="icon"> <img src={itimg1} alt="#" /> </div>
          </div>
          <h4 className="theme_color">Computer repair</h4>
          <p>Perspiciatis eos quos totam cum minima aut!</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="full text_align_center margin_bottom_30">
          <div className="center">
            <div className="icon"> <img src={itimg2} alt="#" /> </div>
          </div>
          <h4 className="theme_color">Mobile service</h4>
          <p>Perspiciatis eos quos totam cum minima aut!</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="full text_align_center margin_bottom_30 margin_0">
          <div className="center">
            <div className="icon"> <img src={itimg3} alt="#" /> </div>
          </div>
          <h4 className="theme_color">Network solutions</h4>
          <p>Perspiciatis eos quos totam cum minima aut!</p>
        </div>
      </div>
    </div>
                </div>
           
            
    )
}
