import React from 'react'
import './NavMob.css'

const NavMob = ({isOpen, toggleMenu }) => {
    const handleGithubClick = () => {
        window.location.href = 'https://github.com/Fizahere';
      };
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active": ""}`}
    onClick={toggleMenu}
    >
   <div className="mobile-menu-container">

    <ul>
        <li>
            <a className='menu-item' href='#home'>Home</a>
        </li>
        <li>
              <a className='menu-item' href="skills">Skills</a>
            </li>
            <li>
              <a className='menu-item' href="#project">Projects</a>
            </li>
            <li>
              <a className='menu-item' href="#contact">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={handleGithubClick}>
                Github Profile
              </button>

              
    </ul>
    </div>
    </div>
    </>
  
  );
};

export default NavMob