import React from 'react'
import lit1 from '../../assets/images/it_service/brand_icon1.png'
import lit2 from '../../assets/images/it_service/brand_icon2.png'
import lit3 from '../../assets/images/it_service/brand_icon3.png'
import lit4 from '../../assets/images/it_service/brand_icon4.png'
import lit5 from '../../assets/images/it_service/brand_icon5.png'

export default function FiveCard() {
    return (
        
        <div className="section padding_layout_1" style={{paddingTop: 50,paddingBottom: 0}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="full">
          <ul className="brand_list">
            <li><img src={lit1} alt="#" /></li>
            <li><img src={lit2} alt="#" /></li>
            <li><img src={lit3} alt="#" /></li>
            <li><img src={lit4} alt="#" /></li>
            <li><img src={lit5} alt="#" /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
