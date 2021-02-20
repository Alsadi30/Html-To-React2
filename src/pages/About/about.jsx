import React from 'react'
import img from '../../assets/images/it_service/post-06.jpg'

export default function Ass() {
    return (
        <div>
            <div id="inner_banner" className="section inner_banner_section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="title-holder">
            <div className="title-holder-cell text-left">
              <h1 className="page-title">About Us</h1>
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end inner page banner --> */}
{/* <!-- section --> */}
<div className="section padding_layout_1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_center">
            <h2>We are Leading Company</h2>
            <p className="large">Fastest repair service with best price!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row about_blog">
      <div className="col-lg-6 col-md-6 col-sm-12 about_cont_blog">
        <div className="full text_align_left">
          <h3>What we do</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley..</p>
          <ul>
            <li><i className="fa fa-check-circle"></i>Persius appetere pro mea harum ridens</li>
            <li><i className="fa fa-check-circle"></i>Instructior vis at causae legimus luptatum mel</li>
            <li><i className="fa fa-check-circle"></i>Maluisset id persius appetere pro mea harum</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 about_feature_img padding_right_0">
        <div className="full text_align_center"> <img className="img-responsive" src={img} alt="#" /> </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    )
}
