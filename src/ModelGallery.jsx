import React from 'react';
import ModelCard from './ModelCard';
import Regression from './Regression.png';
import LogReg from './LogReg.png';
import FF from './FF.png'
// import models from './models';

function ModelGallery() {

  const models = [
    {
      id: 1,
      name: 'Trickledown: more like cryptodrown',
      description: 'Transformers for time series data',
      imageUrl: Regression,
      inspiration: 'heard you could use price action and volume to predict '
    },
    {
      id: 2,
      name: 'I want YOU to get rich from technical analysis - Jim Simons',
      description: 'Minutes on Days on Weeks on Bubbles',
      imageUrl: LogReg,
    },
    {
      id: 3,
      name: 'Flat on the outside, infinite on the inside',
      description: 'Classifying winners and losers, race to the tie?',
      imageUrl: FF,
    },
  ];

  return (
    <div className="model-gallery">
      <h1>Recent Models</h1>
      <div className="model-gallery-grid">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} imageUrl={model.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default ModelGallery;