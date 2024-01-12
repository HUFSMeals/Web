import React from 'react';
import MapComponent from './map';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../search/serchBar';

function Main() {
  return (
    <div>
      <Header/>
      <SearchBar maxWidth={'440px'} />
      <MapComponent />
      <Footer/>
    </div>
  );
}

export default Main;
