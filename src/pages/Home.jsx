//type rfc to automatically import
import React from 'react';
import "./Home.css";
import Homeimage1 from '../images/yitsun01.gif';
import Homeimage2 from '../images/yitsun02.gif';
import Homeimage3 from '../images/yitsun03.gif';
import Homeimage4 from '../images/yitsun04.gif';

export default function Home() {
  return (
    <div className="main-container">
        <div>
        <h1 className="home-drchen">Dr Yi-Tsun Chen</h1>
            <ul className='home-text-left'>
                  <li>Medical Anthropologist, Neuroscientist, Data Analyst, Full Stack Developer</li>
            </ul>
          <div className="home-images">
            <img className="home-image1" src={Homeimage1} alt="Yi-tsun without mask against color explosion" />
            <img className="home-image2" src={Homeimage2} alt="Yi-tsun with mask against color explosion" />
          </div>

          <div className="home-images">
          <ul className='home-text-right'>
                  <li>Ph.D. (Medical Anthropology, Health Equity, Gender/Sxualities), MPH (Health Promotion and Disease Control and Prevention)</li>
                  <li>MSc (Anatomy and Cell Biology and Neuroscience), BCs (Physiology and Life Sciences)</li>
            </ul>
            <img className="home-image3" src={Homeimage3} alt="Yi-tsun with mask against color explosion" />
            <img className="home-image4" src={Homeimage4} alt="Yi-tsun without mask against color explosion" />
          </div>
        </div>
      </div>
  )
}



