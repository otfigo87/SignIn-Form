import React from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>

      <Navigation/>

      <Signin/>

      <Register/>

      <Home/>
      
    </div>
  );
}

export default App;
