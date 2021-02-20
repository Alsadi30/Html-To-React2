import React from 'react'
import { Router} from "@reach/router"
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'

export default function Route() {
    return (
        <Router>
            <Home path="/" />
            <About path='about' />
            <Service path="service"/>
            
      </Router>
    )
}
