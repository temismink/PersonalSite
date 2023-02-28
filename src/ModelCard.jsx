import React from 'react';
import Regression from './Regression.png';
import './ModelCard.css';
import Contact from './Contact';
import { useState, setState } from 'react'
import { Link } from 'react-router-dom'


function ModelCard({ model }) {

  function handleClick (e) {
    console.log('The link was clicked.');
  }

  return (
    <div >
      <div class="outline">
        <h2>{model.name}</h2>
        <p>{model.description}</p>
      </div>
      <Link to = '/Contact'>
      <a onClick={handleClick}><img src={model.imageUrl} alt={model.name} id="image-section" /></a>
      </Link>
    </div>
  );
}

export default ModelCard;