import React from 'react'
import lig from '../../assets/images/it_service/post-03.jpg'
import lig1 from '../../assets/images/it_service/post-04.jpg'
import lig2 from '../../assets/images/it_service/post-06.jpg'

export default function Blog() {
    return (
        <div className="section padding_layout_1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <div className="main_heading text_align_left">
            <h2>Latest from Our Blog</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <img src={lig} alt="#" /> </div>
          <div className="post_time">
            <p><i className="fa fa-clock-o"></i> April 16, 2018 ( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h4>Why Your Computer Hates You</h4>
          </div>
          <div className="blog_feature_cont">
            <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <img src={lig1} alt="#" /> </div>
          <div className="post_time">
            <p><i className="fa fa-clock-o"></i> April 16, 2018 ( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h4>Easy Tips To Computer Repair</h4>
          </div>
          <div className="blog_feature_cont">
            <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="full blog_colum">
          <div className="blog_feature_img"> <img src={lig2} alt="#" /> </div>
          <div className="post_time">
            <p><i className="fa fa-clock-o"></i> April 16, 2018 ( In Maintenance )</p>
          </div>
          <div className="blog_feature_head">
            <h4>Computer Maintenance 2018</h4>
          </div>
          <div className="blog_feature_cont">
            <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
