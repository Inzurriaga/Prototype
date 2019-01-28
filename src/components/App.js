import React, { Component } from 'react';
import example from '../dataset/dataexample.js';
import Explain from './Explain.js';
import explain from '../dataset/dataexplaing.js';
import Example from './Example.js';
import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      explain: explain,
      example: example
    }
  }
  render() {
    return (
      <section>
        <header>
          <h1><span className="js-logo">JS</span> Prototype</h1>
        </header>
        <Explain expData={this.state.explain}/>
        <h2 className="exatitle">/* Examples */</h2>
        <Example exaData={this.state.example}/>
      </section>
    );
  }
}

export default App;
