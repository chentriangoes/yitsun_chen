import React from 'react';
import Lanyu from '../images/Lanyu.jpg';
import knight01 from '../images/knight_01.jpg';
import knight02 from '../images/knight_02.jpg';
import knight03 from '../images/knight_03.jpg';
import knight04 from '../images/knight_03.jpg';


export default function Project() {
  return (
    <div>
      <section id="works">
          <section id="apps">
            <section className="top">
                 <img src={Lanyu} alt="This was taken at Orchid Island of Taiwan with Yi-Tsun listening to an 
                   indigenous elderly of Dao's account about the underground house." width="100%" />
                   <a className="rockoozi" rel="noreferrer" href="https://github.com/chentriangoes/junglr." target="_blank">
                     <h3>Coding Project <span>Junglr.</span></h3>
                   </a>
            </section>

            <section className="bottom">
              <sectiion className="left">
                <section>
                  <img src={knight01} alt="This is upper-left part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                   <a className="GIprize" rel="noreferrer" href="https://github.com/chentriangoes/Cocktail_Diversifier" target="_blank">
                     <h3>Coding Project <span>Cocktail Diversifier</span></h3>
                  </a>
                </section>

                <section>
                  <img src={knight03} alt="This is the upper-right part of a giant wooshies of 4 Qingshan King's
                       knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <a className="thesis" rel="noreferrer" href="https://github.com/chentriangoes/rainorsun" target="_blank">
                       <h3>Coding Assignment <span>Weather Dashboard</span></h3>
                     </a>
                </section>
              </sectiion>

              <section className="right">
                <section>
                  <img src={knight02} alt="This is the bottom-left part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <a className="paper01" rel="noreferrer" href="https://github.com/chentriangoes/NoteTaker" target="_blank">
                       <h3>Coding Assignment <span>Note Taker</span></h3>
                     </a>
                </section>

                <section>
                  <img src={knight04} alt="This is the bottom-right part of a giant wooshies of 4 Qingshan King's
                     knights and 5 transformers taken at Bangka Qingshan Temple, Taiwan." width="100%" />
                     <a className="paper02" rel="noreferrer" href="https://github.com/chentriangoes/HRManagement" target="_blank">
                       <h3>Coding Assignment <span>HRmanagement </span></h3>
                     </a>
                </section>
              </section>
            </section>
          </section>   
      </section>
    </div>
  )
}
