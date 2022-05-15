import React from 'react'
import './Work.css'

export default function Work() {
  return (
    <div className='work'>
      <section className='youtube'>
        <section>
          <h3>Love Narratives: One Five and A Ten</h3>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/videoseries?list=PLqWpYzaTLaBiwCfKWAx9BhYSTnJaTBf5o" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
               picture-in-picture" allowFullScreen />
              <figcaption>Persons with HIV/AIDS Rights Advocacy Association of Taiwan (PRAATW)</figcaption>
        </section>

        <section>
          <h3>The Way</h3>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/videoseries?list=PLUusY-C_9sdfXNOHvJQ_oYvjCiR1A5S94" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
               picture-in-picture" allowFullScreen />
               <figcaption>Chandler Huang, Taiwan International Queer Festival 2019</figcaption>
        </section>
     </section>
    </div>
  )
}
