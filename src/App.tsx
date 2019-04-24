import React, { Component } from 'react';
import { Link } from 'react-router';
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">                
                <li className="nav-item">
                  <Link className="nav-link" to="/view/CharacterTable">Ingresar presonaje</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Ver lista de personajes</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1>Ingreso de Personajes</h1>
        </header>
        <body>

        </body>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
