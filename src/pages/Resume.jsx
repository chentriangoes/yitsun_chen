import React from 'react';
import Career from '../downloads/yitsun.pdf';
import "./Resume.css"

export default function Resume() {
  const styles = {
		heading: {
			fontSize: '1rem',
		},
	};

  return (
    <div>
      <section className="resume">
      <div className="container" data-aos="fade-up">
      <h2 style={styles.heading}>
        {/* change this to click event to appear or remove it*/}
       Do not hesitate to press <button className="resume-button" onClick={() => window.open(Career)}>Resume</button> for details about Dr Chen <em>Thank you for downloading!</em>
      </h2>
                  
			
        <div className="row">

        <div className="col-lg-6">
            <h3 className="resume-title">Contacts</h3>
            <div className="resume-item">
              <h4>Phones and Email</h4>
              <ul>
                <li>(+61)-474-429-926</li>
                <li>(+886)-971-033-805</li>
                <li>chentriangoes@gmail.com</li>
              </ul>
              </div>

          <h3 className="resume-title">Selected Experience</h3>
          <div className="resume-item">
              <h4>Data Scientist <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li><span>2019 - 2021</span> The Australian National University</li>
              </ul>
          </div>

            <div className="resume-item">
            <h4>Health Sevice <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li><span>2021 - 2022</span> Canberra Health Services</li>
              </ul>
            </div>

          <div className="resume-item">

          <h4>Full Stack Developer <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li><span>2021 (in progress)</span> Coding Bootcamp, Perth, The University of Western Australia</li>
              </ul>
            </div>

            <div className="resume-item">

            <h4>Master of Arts <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li><span>2022 (in progress)</span> Applied Buddhist Studies, Nan Tien Institute, Wollongong, Australia</li>
              </ul>
            </div>
 

</div>

          <div className="col-lg-6">
          <h3 className="resume-title">Skills and abilities</h3>
          <div className="resume-item">
              <h4>Overall <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li>Responsive, Responsible, Innovative</li>
                <li>Genuine, Dilligent, Compassionate</li>
                <li>Independent, Cooperative, Generous</li>
                <li>Paying Attention to Details</li>
                <li>English and Chinese Bilingual</li>
                <li>Managerial, Analytic, Strategic Skills</li>
                <li>Interdisciplinary Lens</li>
                <li>Advocate for Health Equity and Social Justice</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full Stack Development <button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li>MySQL</li>
                <li>HTML, CSS, JavaScript, GIT, GitHub</li>
                <li>Web APIs, Third-Party APIs, Server-Side APIs</li>
                <li>Node.js, Object-Oriented Programming (OOP)</li>
                <li>Express.js, SQL, Object Relational Mapping (ORM)</li>
                <li>Model-View-Controller (MVC)</li>
                <li>NoSQL, Progressive Web Applications (PWA)</li>
                <li>React.js, React Native, Next.js, MERN State</li>
              </ul>
            </div>
            </div>


         


        </div>
      </div>
    </section>

    </div>
  )
}
