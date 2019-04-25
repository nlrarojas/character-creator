import React, { Component } from "react";

interface IProps {
  characterList: any[];
}

interface IState {}

export default class CharacterTable extends Component<IProps, IState> {
  render() {
    const { characterList } = this.props;
    console.log(characterList);
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Appearance</th>
              <th scope="col">Life</th>
              <th scope="col">Punches per time</th>
              <th scope="col">Level</th>
              <th scope="col">Spaces</th>
              <th scope="col">Appearance level</th>
              <th scope="col">Cost</th>
              <th scope="col">Weapon</th>
            </tr>
          </thead>
          <tbody>
            {characterList.map((character, i) => {              
              return (
                <tr id={character.name + i}>
                  <th scope="row">{character.name}</th>                  
                  <td>{character.appearance}</td>
                  <td>{character.life}</td>
                  <td>{character.punchesPerTime}</td>
                  <td>{character.level}</td>
                  <td>{character.spaces}</td>
                  <td>{character.appearanceLevel}</td>
                  <td>{character.cost}</td>
                  <td>{character.weapon.name}</td>
                </tr>
              );                
            })}
          </tbody>
        </table>
      </>
    );
  }
}
