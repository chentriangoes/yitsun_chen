import React from 'react';
import Lanyu01 from '../images/Lanyu01.jpg';
import Lanyu02 from '../images/Lanyu02.jpeg';
import knight01 from '../images/knight_01.jpg';
import knight02 from '../images/knight_02.jpg';
import knight03 from '../images/knight_03.jpg';
import knight04 from '../images/knight_03.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Project.css'


export default function Project() {
  return (
    <div>
      <section className="works">
          <section className="apps">
            <section className="top">
                 <img src={Lanyu01} alt="This was taken at Orchid Island of Taiwan with Yi-Tsun listening to an 
                   indigenous elderly of Dao's account about the underground house." width="100%" />
                   <h3 className="group_a"><a rel="noreferrer" href="https://project-2-dw.herokuapp.com/" target="_blank">
                   Junglr.
                   </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/junglr./")}/></span></h3>
            </section>

            <section className="middle">
              <section className="left">
                <section>
                  <img src={knight01} alt="This is upper-left part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <h3 className="individual_a"><a rel="noreferrer" href="https://chentriangoes.github.io/ScheduledDay/" target="_blank">
                     Day Planner
                     </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/ScheduledDay")}/></span></h3>
                </section>

                <section>
                  <img src={knight03} alt="This is the upper-right part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <h3 className="individual_b"><a rel="noreferrer" href="https://chentriangoes.github.io/CodingChallenge/" target="_blank">
                     Coding Quiz
                     </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/CodingChallenge")}/></span></h3>
                </section>
              </section>

              <section className="right">
                <section>
                  <img src={knight02} alt="This is the bottom-left part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <h3 className="individual_c"><a rel="noreferrer" href="https://mighty-woodland-73767.herokuapp.com/notes" target="_blank">
                     Note Taker
                     </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/NoteTaker")}/></span></h3>
                </section>

                <section>
                  <img src={knight04} alt="This is the bottom-right part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <h3 className="individual_d"><a rel="noreferrer" href="https://lit-cliffs-86624.herokuapp.com/" target="_blank">
                     Text Editor
                     </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/textEditor")}/></span></h3>
                </section>
              </section>
            </section>

            <section className="bottom">
                 <img src={Lanyu02} alt="This was taken at Orchid Island of Taiwan with Yi-Tsun and his fellow international volunteers." width="100%" />
                   <h3 className="group_b"><a rel="noreferrer" href="https://chentriangoes.github.io/Cocktail_Diversifier/index.html" target="_blank">
                     Cocktail Diversifier
                     </a><br/><span>Codes <FontAwesomeIcon className="socialicon" icon={faGithub} size="1x" onClick={() => window.open("https://github.com/chentriangoes/Cocktail_Diversifier")}/></span></h3>
            </section>

          </section>   
      </section>
    </div>
  )
}
