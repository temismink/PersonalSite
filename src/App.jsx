import React from 'react';
import ModelGallery from './ModelGallery';
import Portrait from './Portrait.png'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import More from './More';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<About/>} />
        <Route path="/Models#2" element={<Contact/>} />
        <Route path="/Models#3" element={<More/>} />
      </Routes>
    </Router>
  );
}

export default App;