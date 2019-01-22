import React from 'react';
import './Services.css';

const sText = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, optio. Odio laboriosam possimus veniam dolorem tenetur, illo perferendis cupiditate temporibus nostrum rem quas iste assumenda ducimus impedit et minus nesciunt.'
}

export default () => (
  <div className="container section scrollspy" id="services">
    <div className="row">
      <div className="col s12 l4">
        <h2 className="indigo-text text-darken-4">What I do...</h2>
        <p>{sText.text}</p>
        <p>{sText.text}</p>
      </div>

      <div className="col s12 l6 offset-l2">
        <ul className="tabs">
          <li className="tab col s6">
            <a href="#photography" className="indigo-text text-darken-4">Photography</a>
          </li>
          <li className="tab col s6">
            <a href="#editing" className="indigo-text text-darken-4">Editing</a>
          </li>
        </ul>

        <div className="col s12" id="photography">
          <p className="flow-text indigo-text text-darken-4">PHOTOGRAPHY</p>
          <p>{sText.text}</p>
          <p>{sText.text}</p>
        </div>

        <div className="col s12" id="editing">
          <p className="flow-text indigo-text text-darken-4">EDITING</p>
          <p>{sText.text}</p>
          <p>{sText.text}</p>
        </div>
      </div>
    </div>
  </div>
);
