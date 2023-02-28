import React from 'react';
import './Home.css';
import ModelGallery from './ModelGallery';
import Portrait from './Portrait.png'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';

function Home() {

  return (
      
    <div className="App">
        <Header/>
      {/* <header>
      <img src={Portrait} alt="Logo" className="logo" />
      <h3 className="quote">"We must be careful not to confuse data with the abstractions we use to analyze them."</h3>
      <nav className="nav-links">
        <ul>
          <li><a class="hover-underline-animation" href="#">Works</a></li>
          <li><a class="hover-underline-animation" href="#">Resume</a></li>
          <li><a class="hover-underline-animation" href="#">Linkedin</a></li>
          <li><a class="hover-underline-animation" href="#">Contact</a></li>
        </ul>
      </nav>
    </header> */}
      <main>
        <ModelGallery/>
      </main>
      <Footer />
    </div>

  );
}

export default Home;