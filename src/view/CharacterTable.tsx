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
            {characterList.map(weapon => {
              console.log(weapon)
              return (
                weapon.name
              );
                <tr>
                  <th scope="row">{weapon.name}</th>
                  <td>{weapon.name}</td>
                  <td>{weapon.appearance}</td>
                  <td>{weapon.life}</td>
                  <td>{weapon.punchesPerTime}</td>
                  <td>{weapon.level}</td>
                  <td>{weapon.spaces}</td>
                  <td>{weapon.appearanceLevel}</td>
                  <td>{weapon.cost}</td>
                  <td>{weapon.weapon}</td>
                </tr>
            })}
          </tbody>
        </table>
      </>
    );
  }
}
