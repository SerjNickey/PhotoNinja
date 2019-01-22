import React from 'react';
import portrait from './img/portrait.jpg';
import city from './img/city.jpg';
import nature from './img/nature.jpg';

const pgText = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos, molestiae est nobis, molestias assumenda at ipsa error excepturi voluptatem amet, corrupti officia itaque quod! Obcaecati illum minus iste ipsa.'
};

export default () => (
  <section className="container section scrollspy" id="photos">
    <div className="row">
      <div className="col s12 l4">
        <img src={portrait} alt="portrait" className="responsive-img materialboxed" />
      </div>

      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Portraits</h2>
        <p>{pgText.text}</p>
      </div>
    </div>

    <div className="row">
      <div className="col s12 l4 push-l7 offset-l1">
        <img src={city} alt="city" className="responsive-img materialboxed" />
      </div>

      <div className="col s12 l6 pull-l5 right-align offset-l1">
        <h2 className="indigo-text text-darken-4">Cityscapes</h2>
        <p>{pgText.text}</p>
      </div>
    </div>

    <div className="row">
      <div className="col s12 l4">
        <img src={nature} alt="nature" className="responsive-img materialboxed" />
      </div>

      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Nature</h2>
        <p>{pgText.text}</p>
      </div>
    </div>
  </section>
);
