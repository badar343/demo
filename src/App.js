import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div classname = "App">
      <Dinner dishName = "Chiken Karahi" sweetDish = "Kheer"></Dinner>
      <hr/>
      <Dinner dishName = "Pizza" sweetDish = "Gajar ka Halwa"></Dinner>
      <hr/>
    </div>
  );
}

export default App;
