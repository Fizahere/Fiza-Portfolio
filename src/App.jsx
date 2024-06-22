import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Main />
        <Skills />
        <Projects/>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
