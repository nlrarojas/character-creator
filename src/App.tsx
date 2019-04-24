import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import WeaponGenerator from './model/WeaponGenerator';
import WeaponPrototype from './model/WeaponPrototype';

class App extends Component {
  render() {
    const weaponGenerator = new WeaponGenerator();    
    weaponGenerator.getWeapons().map(weapon => {
      WeaponPrototype.addPrototype(weapon.name, weapon);
    });
    console.log(WeaponPrototype.getPrototype('Scop-ETA'));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
