import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Gallery />
      </div>
    );
  }
}

// render(<App />, document.getElementById('root'));

export default App;
