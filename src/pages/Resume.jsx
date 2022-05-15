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
    <div className="resume">
      <section>
      <div className="container" data-aos="fade-up">
      <h2 style={styles.heading}>
        {/* change this to click event to appear or remove it*/}
       Please o not hesitate to press <button className="resume-button" onClick={() => window.open(Career)}>Resume</button> for details about Dr Chen <em>Thank you for downloading!</em>
      </h2>
                  
			
        <div className="row">

        <div className="col-lg-6">
            <h3 className="resume-title">Contacts</h3>
            <div className="resume-item">
              <h4>Telephone and Email</h4>
              <ul>
                <li>(+61)-474-429-926</li>
                <li>(+886)-971-033-805</li>
                <li>chentriangoes@gmail.com</li>
              </ul>
              </div>
</div>

<div className="col-lg-6">
<h3 className="resume-title">Career Development</h3>
          <div className="resume-item">
              <h4><strong>Selected Experience </strong><button className="resume-button" onClick={() => window.open(Career)}>Resume</button></h4>
              <ul>
                <li>Policy and Practice</li>
                <li>Education</li>
                <li>Health Service/Promotion</li>
                <li>Data Analytics</li>
                <li>Research Management/Strategy</li>
                <li>Customer Service</li>
                <li>Community Service</li>
                <li>Translation</li>
              </ul>
          </div>
          </div>

          <div className="col-lg-6">
          <h3 className="resume-title">Proficiencies</h3>
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
            </div>

            <div className="col-lg-6">
          <h3 className="resume-title">Coding Skills</h3>
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
