import React, { Component } from 'react';
import './App.scss';
import WeaponGenerator from './model/WeaponGenerator';
import WeaponPrototype from './model/WeaponPrototype';
import AddCharacter from './view/AddCharacter';
import CharacterTable from './view/CharacterTable';

class App extends Component {
  render() {
    const weaponGenerator = new WeaponGenerator();
    weaponGenerator.getWeapons().map(weapon => {
      WeaponPrototype.addPrototype(weapon.name, weapon);
    });
    //console.log(WeaponPrototype.getPrototype('Scop-ETA'));
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#form">Ingresar presonaje</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#list">Ver lista de personajes</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div id="form" className="container">
          <h1>Ingreso de Personajes</h1>
          <AddCharacter />
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
