import React from 'react';

const cfText = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default () => (
  <div className="section container scrollspy" id="contact">
    <div className="row">
      <div className="col s12 l5">
        <h2 className="indigo-text text-darken-4">Get In Touch</h2>
        <p>{cfText.text}</p>
        <p>{cfText.text}</p>
        <p>{cfText.text}</p>
        <p>{cfText.text}</p>
      </div>

      <div className="col s12 l5 offset-l2">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email" required />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea id="message" className="materialize-textarea" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <div className="input-field">
            <input type="text" id="date" className="datepicker" required />
            <label htmlFor="date">Choose a date you need me for...</label>
          </div>

          <div className="input-field">
            <p>Services required...</p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Photography</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Editing</span>
              </label>
            </p>
          </div>

          <div className="input-field center">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
