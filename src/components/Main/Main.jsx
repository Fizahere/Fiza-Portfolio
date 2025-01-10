import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className='main-container' id="home">
      <div className='main-content'>
        <h2 className='animated-text'>Hi! I'm Fiza</h2>
        <p>
          Passionate and dedicated aspiring Front-end Developer with a strong foundation in front-end technologies, I am
          actively seeking an opportunity to contribute to a dynamic team and gain practical experience in front-end
          development. I am well-prepared to tackle new challenges and grow as a professional in front-end development.
        </p>
        <a href='/assets/Fiza-React-Developer.pdf' download>
          <button className='download-cv'>Download CV</button>
        </a>
      </div>

      <div className='main-img'>
        <div>
        {/* <img src="./assets/images/anime.jpg" alt="Profile" /> */}
        <img src="./assets/images/IMG_9190.jpg" alt="Profile" />
        </div>
        <div>
          <h2 className='profession'>Front-End Developer</h2>
        </div>
      </div>
    </section>
  );
}

export default Main;
