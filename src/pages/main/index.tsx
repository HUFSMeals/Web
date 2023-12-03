import React from 'react';
import MapComponent from './map';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Main() {
  return (
    <div>
      <Header/>
      <h1>실시간 위치 지도</h1>
      <MapComponent />
      <Footer/>
    </div>
  );
}

export default Main;
