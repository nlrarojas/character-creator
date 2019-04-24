import React, { Component } from "react";
import WeaponGenerator from "../model/WeaponGenerator";
import CharacterBuilder from '../model/CharacterBuilder';
import ICharacter from '../domain/ICharacter';
import CharacterTable from './CharacterTable';

interface IProps {

}

interface IState {
    name ?: any;
    appearance ?: any;
    life ?: any;
    punchesPerTime ?: any;
    level ?: any;
    spaces ?: any;
    appearanceLevel ?: any;
    cost ?: any;
    weapon: any;
    type: string;

    characters: any [];
}

export default class AddCharacter extends Component<IProps, IState> {
  static characterList: ICharacter[]= [];

  constructor(props: any) {
    super(props);
    this.state = {name: '', appearance: [], life: 0, punchesPerTime: 0, level: 0, spaces: 0, appearanceLevel: 0, cost: 0, weapon: [], type: '', characters: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    switch (event.target.id) {
        case 'name':
            this.setState({name: event.target.value});
        break;
        case 'appearance':
            this.setState({appearance: event.target.value});
        break;
        case 'life':
            this.setState({life: event.target.value});
        break;
        case 'punchesPerTime':
            this.setState({punchesPerTime: event.target.value});
        break;
        case 'level':
            this.setState({level: event.target.value});
        break;
        case 'spaces':
            this.setState({spaces: event.target.value});
        break;
        case 'appearanceLevel':
            this.setState({appearanceLevel: event.target.value});
        break;
        case 'cost':
            this.setState({cost: event.target.value});
        break;
        case 'weapon':
            this.setState({weapon: event.target.value});
        break;
        case 'type':
            this.setState({type: event.target.value});
        break;
    }

  }

  handleSubmit(event: any) {
    event.preventDefault();

    const { name, appearance, life, punchesPerTime, level, spaces, appearanceLevel, cost, weapon, type } = this.state;
    const characterBuilder = new CharacterBuilder(type);

    const character = characterBuilder
    .setName(name)
    .setAppearance(appearance)
    .setLife(life)
    .setPunchesPerTime(punchesPerTime)
    .setLevel(level)
    .setSpaces(spaces)
    .setAppearanceLevel(appearanceLevel)
    .setCost(cost)
    .setWeapon(weapon)
    .build();

    AddCharacter.characterList.push(character)
    this.setState({characters: AddCharacter.characterList});

    window.scrollTo(0, 1500);
  }

  render() {
    const weaponGenerator = new WeaponGenerator();
    const { characters } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
          </div>
            <input type="text" className="form-control" id="name" onChange={this.handleChange} />
          <div className="form-group">
            <label>Appearance</label>
            <input type="file" className="form-control" id="appearance" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Life</label>
            <input type="number" className="form-control" id="life" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Punches per time</label>
            <input type="number" className="form-control" id="punchesPerTime" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Level</label>
            <input type="number" className="form-control" id="level" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Spaces</label>
            <input type="number" className="form-control" id="spaces" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Appearance Level</label>
            <input
              type="number"
              className="form-control"
              id="appearanceLevel"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input type="number" className="form-control" id="cost" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Weapon</label>
            <select className="form-control" id="weapon" onChange={this.handleChange}>
            <option>Select the weapon</option>
              {weaponGenerator.getWeapons().map(weapon => {
                return (
                  <option key={weapon.name} value={weapon.name}>
                    {weapon.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select className="form-control" id="type" onChange={this.handleChange}>
                <option value="0">Select the character type</option>
                <option value="Monster">Monster</option>
                <option value="Land Warrior">Land Warrior</option>
                <option value="Beast">Beast</option>
            </select>
          </div>
          <input type="submit" value="Add" className="btn btn-primary" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <CharacterTable characterList={characters} />
      </>
    );
  }
}
