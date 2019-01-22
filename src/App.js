import React, { Component } from 'react';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import Parallax from './components/Parallax';
import Services from './components/Services';
import street from './components/img/street.jpg';
import stars from './components/img/stars.jpg';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoGrid />
        <Parallax imgSrc={street} imgAlt="street" />
        <Services />
        <Parallax imgSrc={stars} imgAlt="stars" />
        <ContactForm />
        <Footer />
      </div> 
    );
  }
}

export default App;
