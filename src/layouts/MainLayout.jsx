import React from 'react'
import Navbar from './nav/Navbar'
import Footer from './footer/Footer'

export default function MainLayout(props) {
  return (
    <div>
        {/* nav */}
        <Navbar/>

        {props.children}

        {/* footer  */}
        <Footer/>
    </div>
  )
}
