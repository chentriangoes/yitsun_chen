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
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <p>
                <em>
                A Ph.D. graduate from the medical school of the Australian National University with expertise in conducting health research from an interdisciplinary lens. Experienced in quality customer services and working under multiple supervisors across departments for research management ranging from proposals evaluation, grants coordination, quantitative and qualitative data analytics, and research strategies planning. Currently trained at a coding bootcamp in the University of Western Australia towards a certified full-stack web developer with advanced digital literacy in UI/UX design, managing, analysing, associating, showcasing, and securing data. Also enrolled in the program of Master of Applied Buddhist Studies at the Nan Tien Institute, Wollongong, to develop capacity of adopting critical and practical approaches to inform public health policies and programs. Looking forwards to contributing to this position, the team, and the community by leveraging skills in consolidating various innovative techniques of the web development, research management, data analytics, and anthropological studies on health.
                  <br />I enjoy sharing knowledge and learn. It's my pleasure to support individuals in need.
                </em>
              </p>
              <ul>
                <li>(+61)-474-429-926</li>
                <li>(+886)-971-033-805</li>
                <li>chentriangoes@gmail.com</li>
              </ul>
            </div>

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
          <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Doctor of Philosophy</h4>
              <h5>2012 - 2020</h5>
              <p>
                <em>Medical School, The Australian National University, ACT, Australia</em>
              </p>
              <p>
                Activities and Societies:
              </p>
            </div>

            <div className="resume-item">
              <h4>Master of Public Health</h4>
              <h5>2011</h5>
              <p>
                <em>College of Medicine, Biology and Environment, The Australian National University, ACT, Australia</em>
              </p>
              <p>
                Activities and Societies:
              </p>
            </div>

            <div className="resume-item">
              <h4>Master of Science</h4>
              <h5>2005 - 2007</h5>
              <p>
                <em>Graduate Institute of Anatomy and Cell Biology, National Taiwan University, Taipei, Taiwan</em>
              </p>
              <p>
                Activities and Societies:
              </p>
            </div>

            <div className="resume-item">
              <h4>Bachelor of Science</h4>
              <h5>2001 - 2005</h5>
              <p>
                <em>Department of Life Sciences, National Chung Hsing University, Taichung, Tawian</em>
              </p>
              <p>
                Activities and Societies:
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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Health Sevices</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>Canberra... </em>
              </p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Coding Skill and abilities</h4>
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
        </div>
      </div>
    </section>

    </div>
  )
}
