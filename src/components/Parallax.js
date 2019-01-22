import React from 'react';

export default ({imgSrc, imgAlt}) => (
  <div className="parallax-container">
    <div className="parallax">
      <img src={imgSrc} alt={imgAlt} className="responsive-img" /> 
    </div>
  </div>
);
