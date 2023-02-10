import './App.css';
import PersonCard from './components/PersonCard'
import React from 'react';

function App() {
  return (
    <div className="App">
    <PersonCard full_name={"Doe, Jane"} age={45} hair_color={"Black"}/>
    <PersonCard full_name={"Smith, John"} age={88} hair_color={"Brown"}/>
    <PersonCard full_name={"Filmore, Millard"} age={50} hair_color={"Brown"}/>
    <PersonCard full_name={"Smith, Maria"} age={62} hair_color={"Brown"}/>
    </div>
  );
}

export default App;
