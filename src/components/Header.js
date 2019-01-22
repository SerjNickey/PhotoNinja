import React from 'react';
import './Header.css';

export default () => (
  <header>
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="/" className="brand-logo">Photo Ninja</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-menu"><i className="material-icons">menu</i></a>

        <ul className="right hide-on-med-and-down">
          <li><a href="#photos">Photos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Instagram">
            <i className="fab fa-instagram"></i>
          </a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Facebook">
            <i className="fab fa-facebook"></i>
          </a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="This is Twitter">
            <i className="fab fa-twitter"></i>
          </a></li>
        </ul>

        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#">Photos</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
