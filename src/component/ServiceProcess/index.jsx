import React from 'react'
import img1 from '../../assets/images/it_service/si1.png'
import img2 from '../../assets/images/it_service/si2.png'
import img3 from '../../assets/images/it_service/si3.png'
import img4 from '../../assets/images/it_service/si4.png'
import img5 from '../../assets/images/it_service/si5.png'
import img6 from '../../assets/images/it_service/si6.png'

export default function ServiceProcess() {
    return (
        
<div className="section padding_layout_1 light_silver gross_layout">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_left">
            <h2>Service Process</h2>
            <p className="large">Easy and effective way to get your device repaired.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img1} alt="#" /></div>
                <h4 className="service-heading">Fast service</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img2} alt="#" /></div>
                <h4 className="service-heading">Secure payments</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img3} alt="#" /></div>
                <h4 className="service-heading">Expert team</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img4} alt="#" /></div>
                <h4 className="service-heading">Affordable services</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img5} alt="#" /></div>
                <h4 className="service-heading">90 Days warranty</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="full">
              <div className="service_blog_inner">
                <div className="icon text_align_left"><img src={img6} alt="#" /></div>
                <h4 className="service-heading">Award winning</h4>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
