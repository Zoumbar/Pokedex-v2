import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/layout/Nav'
import Container from './components/layout/container'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Pokemon from './components/Pokemon/Pokemon'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className="container">
          <Switch>
            <Route exact path="/" component= {Container} />     
            <Route exact path="/pokemon/:PokemonIndex" component={Pokemon}/>
          </Switch>  
        </div>
      </div>
    </Router>
  );
}

export default App;
