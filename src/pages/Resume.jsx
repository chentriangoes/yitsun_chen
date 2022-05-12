import React from 'react';
import Career from '../downloads/yitsun.pdf'

export default function Resume() {
  const styles = {
		heading: {
			fontSize: '1rem',
		},
	};

  return (
    <div className="resume" md="12">
      <h2 style={styles.heading}>
       View my resume here: <button className="resume-button" onClick={() => window.open(Career)}>Resume</button>
      </h2>
      <h3> Research Interest </h3>
    <p>
      Vulnerability, Social Suffering, Everyday Struggles, Health Policy and Practice, Gender/Sexualities Studies, Global Health, Science and Technology Studies, Applied Buddhist Studies, Digital Health
    </p>
    <h3>Education</h3>
    <ul>
      <li>PhD (Medical School, The Australian National University)</li>
      <li>MPH (College of Medicine, Biology and Environment, The Australian National University)</li>
      <li>MSc (Graduate Institute of Anatomy and Cell Biology, National Taiwan University)</li>
      <li>BSc (Department of Life Science, National Chung Hsing University)</li>
    </ul>
    <h3>Achievements</h3>
    <ul>
      <li><a href="https://science.anu.edu.au/alumni/you-see-it/winners" rel="noreferrer" target="_blank">2021 Winner of “From across the global,” ANU College of Science ‘As You See it’ Photography Competition</a></li>
      <li><a href="https://reurl.cc/GmEWEp" rel="noreferrer" target="_blank">2020 ANU Gender Institute PRIZE (PhD Thesis) For Excellence in Gender and Sexuality research </a></li>
      <li>2017-2019 ANU HDR Fee Remission Merit Scholarship</li>
    </ul>
    <h3>Web Developments (Deployed Page and Please Find Source Codes at "Works")</h3>
    <ul>
      <li><a href="https://project-2-dw.herokuapp.com/" rel="noreferrer" target="_blank">Junglr.</a></li>
      <li><a href="https://chentriangoes.github.io/Cocktail_Diversifier/" rel="noreferrer" target="_blank">Cocktail Diversifier</a></li>
      <li><a href="https://mighty-woodland-73767.herokuapp.com/notes" rel="noreferrer" target="_blank">Note Taker</a></li>
      <li><a href="https://chentriangoes.github.io/rainorsun/" rel="noreferrer" target="_blank">Weather Dashboard</a></li>
    </ul>  
      {/* change this to click event to appear or remove it*/}
				<p>Thank you for downloading!</p>
    </div>
  )
}
