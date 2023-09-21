import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheNav from './TheNav';
import './index.css';
import CoffeePhotos from './CoffeePhotos';
import Coldbrew from './Coldbrew';

function App() {
  return (
    <div className="App">
      <TheNav/>
      <CoffeePhotos/>
      <Coldbrew/>
   </div>
  );
}

export default App;
