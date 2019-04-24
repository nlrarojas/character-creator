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
}