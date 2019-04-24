import { IPrototype } from '../util/IPrototype';
import Weapon from '../domain/Weapon';
const HashMap = require('hashmap');

export default class WeaponPrototype {
    static weapons: any = new HashMap();

    static getPrototype(weaponName: string) : IPrototype <Weapon> {
        return this.weapons.get(weaponName);
    }

    static addPrototype(weaponName: string, prototype: IPrototype<Weapon>) {
        this.weapons.set(weaponName, prototype);
    }
}