import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/layout/Nav'
import Container from './components/layout/container'


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <Container/>
      </div>
    </div>
  );
}

export default App;
