import './App.css';
//import { useEffect, useState } from 'react';
import TotalVisit from ".totalVisit";


const App = () => {

  return <div className="App">
    <h1>현재 상영 영화</h1>
    <TotalVisit/>  
    <ul className="flex-container">
      <li className="flex-item" >1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
      <li className="flex-item">1</li>
    </ul>
  </div>;
}

export default App;
