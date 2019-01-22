import React from 'react';

const fooText = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default () => (
  <footer className="page-footer grey darken-3">
    <div className="container">
      <div className="row">
        <div className="col s12 l6">
          <h5>About Me</h5>
          <p>{fooText.text}</p>
          <p>{fooText.text}</p>
        </div>

        <div className="col s12 l4 offset-l2">
          <h5>Connect</h5>
          <ul>
            <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
            <li><a href="#" className="grey-text text-lighten-3">Twitter</a></li>
            <li><a href="#" className="grey-text text-lighten-3">Linked In</a></li>
            <li><a href="#" className="grey-text text-lighten-3">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright grey darken-4">
      <div className="container center-align">&copy; 2018 Photo Ninja</div>
    </div>
  </footer>
);
