import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; // choose upper case

class App extends Component {
  state = {
    persons:[
      {name:'Max', age:28},
      {name:'Min', age:18},
      {name:'Go', age:128},
    ]
  }

  switchNameHandler = () =>{
    console.log('was clicked');
  }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HI, Im a REAasdCT APP </h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name="Joe" age="28" />
          <Person name="Barb" age="30" > SOME children Concat stuff </Person>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
