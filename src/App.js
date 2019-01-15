import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
      </div>
    );
  }
}

export default App;
