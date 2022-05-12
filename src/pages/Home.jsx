//type rfc to automatically import
import React from 'react'
import "./Home.css"
import Homeimage from '../images/Grad.jpg'

export default function Home() {
  return (
        <div className="background">
            <img className="home-image" src={Homeimage} alt="Yi-Tsun's grad taken with the former Miniter for Foreign Affairs, 
            Julie Bishoon on the stage of graduation" />
            <div className="home-text">
                <h1 className="home-drchen">Dr Yi-Tsun Chen</h1>
                <p>I need to add something here</p>
            </div>
        </div>
  )
}



