import React from 'react'
import Header from '../../component/header'
import SliderSection from '../../component/SliderSection'
import WhyChUs from '../../component/WhyChooseUs'
import DataToggle from '../../component/DataToggle'
import NeedFileRecovery from '../../component/NeedFileRecovery'
import ServiceProcess from '../../component/ServiceProcess'
import OurProducts from '../../component/OurProducts'
import Feedback from '../../component/Feedback'
import Blog from '../../component/Blog'
import ClientSay from '../../component/ClientSay'
import FreeQuote from '../../component/FreeQuote'
import FiveCard from '../../component/FiveCard'
import Modal from '../../component/modal'
import Footer from '../../component/Footer'

export default function Home() {
    return (
        <div>
               <Header />
      <SliderSection />
      <div className="section padding_layout_1">
  <div className="container">
      <WhyChUs />
          <DataToggle />
          <NeedFileRecovery/>
          </div>
      </div>
      <ServiceProcess />
      <OurProducts />
      <Feedback />
      <Blog/>
      <ClientSay />
      <FreeQuote />
      <FiveCard />
      <Modal />
      <Footer/>
        </div>
    )
}
