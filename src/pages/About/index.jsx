import React from 'react'
import Header from '../../component/header'
import Ass from './about'
import DataToggle from '../../component/DataToggle'
import NeedFileRecovery from '../../component/NeedFileRecovery'
import Service from './service'
import Staff from '../../component/Staff'
import FreeQuote from '../../component/FreeQuote'
import FiveCard from '../../component/FiveCard'
import Footer from '../../component/Footer'
import Feedback from '../../component/Feedback'
export default function About() {
    return (
        <div>
            <Header />
            <Ass />
            <DataToggle />
            <NeedFileRecovery />
            <Service />
            <Staff />
            < Feedback/>
            <FreeQuote />
            <FiveCard />
            <Footer/>
        </div>
    )
}
