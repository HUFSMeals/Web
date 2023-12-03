import React from 'react';
import MapComponent from './map';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Main() {
  return (
    <div>
      <Header/>
      <MapComponent />
      <Footer/>
    </div>
  );
}

export default Main;
