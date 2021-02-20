import React from 'react'
import Blog from '../../component/Blog'
import Feedback from '../../component/Feedback'
import FiveCard from '../../component/FiveCard'
import Footer from '../../component/Footer'
import FreeQuote from '../../component/FreeQuote'
import Header from '../../component/header'
import ServiceProcess from '../../component/ServiceProcess'
import Staff from '../../component/Staff'
import Servila from './Service'

export default function Service() {
    return (
      <div>
        <Header />
            <Servila />
            <ServiceProcess />
            <Blog />
            <Staff />
            <Feedback />
            <FreeQuote style={ {zIndex:99}}/>
            <FiveCard />
            <Footer />
            
        </div> 
    )
}
