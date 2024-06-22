import React, { useState } from 'react';
import './Navbar.css';
import NavMob from './NavMob/NavMob';


const Navbar = () => {

const [openMenu, setOpenMenu]=useState(false);
const toggleMenu= () => {
  setOpenMenu(!openMenu);
};

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Fizahere';
  };

  return (
    <>

    <NavMob isOpen={openMenu} toggleMenu={toggleMenu} />


      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src="./assets/images/fiza.png" alt="Fizahere Logo" />

          <ul className='nav-menu'>
            <li>
              <a className='menu-item' href="#home">Home</a>
            </li>
            <li>
              <a className='menu-item' href="#skills">Skills</a>
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

          <button className='menu-btn' onClick={toggleMenu}>
          <img src="./assets/images/menu-icon.png" alt="" />
           <span class={"material-symbols-outlined"}
           style={{fontSize: "1.8rem"}}
           >
            {openMenu ? "":"" }
           </span>
          </button>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;