import React from 'react';
import makeupLogo from './images/makeupLogo.png';
import brushes from './images/brushes.jpg';
import makeup from './images/makeup.jpg';
import stylingEquip from './images/stylingEquip.jpg';
import './App.css';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Landing from './Components/Landing'
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
    <Home image={makeupLogo} />
    <Products image1={brushes} image2={makeup} image3={stylingEquip} />
    <Landing />
    </div>
  );
}

export default App;
