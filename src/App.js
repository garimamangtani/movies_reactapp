import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies'

class App extends Component {
 
  render() { 
    return (<main className = "container">
      <Movies></Movies>
    </main>  );
  }
}
 


export default App;
