import React, { useState } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import './App.css';



function App() {
  const [route, setRoute] = useState('home');

  const onRouteChange = (route) => {
     setRoute({route:'route'})
    };

  return (
    <div>
{

      route === 'home'
      ? <Navigation onRouteChange={onRouteChange}/>
      : route === 'signin'
      ? <Signin onRouteChange={onRouteChange}/>
      : <Register onRouteChange={onRouteChange}/> 
      
}    

    </div>
  );
    }


export default App;
