import Weapon from './Weapon';
import { IPrototype } from '../util/IPrototype';

export default interface ICharacter extends IPrototype<ICharacter> {
  name: string;
  appearance: string[];
  life: number;
  punchesPerTime: number;
  level: number;
  spaces: number;
  appearanceLevel: number;
  cost: number;
  weapon: Weapon;

  clone(): ICharacter;
  deepClone(): ICharacter;

  /*
  setName(name: string): void;
  getName(): string;

  setAppearance(appearance: string []): void;
  getAppearance(): string[];

  setLife(life: number): void;
  getLife(): number;

  setPunchesPerTime(punchesPerTime: number): void;
  getPunchesPerTime(): number;

  setAppearanceLevel(appearanceLevel: number): void;
  getAppearanceLevel(): number;

  setCost(cost: number): void;
  getCost(): number;

  setWeapon(weapon: Weapon): void;
  getWeapon(): Weapon;
  */
}