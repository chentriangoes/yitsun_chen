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
       View my resume here: <button className="resume-button" onClick={() => window.open(Career)}>Resume</button>
      </h2>
            {/* change this to click event to appear or remove it*/}
				<p>Thank you for downloading!</p>
        <div className="row">

          <div className="col-lg-6">
          <h3 className="resume-title">Skills and abilities</h3>
          <div className="resume-item">
              <h4>Something here ...</h4>
              <ul>
                <li>English Professional working proficiency</li>
                <li>Chinese Native or bilingual proficiency</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full Stack Development</h4>
              <ul>
                <li>English Professional working proficiency</li>
                <li>Chinese Native or bilingual proficiency</li>
                <li>Microsoft SQL Server 2012</li>
                <li>HTML, CSS, JavaScript, GIT, GitHub Pages Skills</li>
                <li>Web APIs, Third-Party APIs, Server-Side APIs Skills</li>
                <li>Node.js, Object-Oriented Programming (OOP) Skills</li>
                <li>Express.js, SQL, Object Relational Mapping (ORM) Skills</li>
                <li>Model-View-Controller (MVC) Skills</li>
                <li>NoSQL, Progressive Web Applications (PWA) Skills</li>
                <li>React.js, React Native, Next.js, MERN State Skills</li>
              </ul>
            </div>
            </div>



          <div className="col-lg-6">
          <h3 className="resume-title">Currently, I am broadening my horizon at ...</h3>
          <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>2022 (in progress)</h5>
              <p>
                <em>Coding Bootcamp, Perth, The University of Western Australia</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Master of Arts</h4>
              <h5>2022 - 2023 (in progress)</h5>
              <p>
                <em>Applied Buddhist Studies, Nan Tien Institute, Wollongong, Australia</em>
              </p>
            </div>
            </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Data Scientist Career Path</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>The Australian National University</em>
              </p>
              <ul>
                <li> Download the detail </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Health Sevices</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>Canberra... </em>
              </p>
              <ul>
              <li> Download the detail </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Contacts</h4>
              <ul>
                <li>(+61)-474-429-926</li>
                <li>(+886)-971-033-805</li>
                <li>chentriangoes@gmail.com</li>
              </ul>
              </div>

          </div>
        </div>
      </div>
    </section>

    </div>
  )
}
