import { IPrototype } from '../util/IPrototype';

export default class Weapon implements IPrototype <Weapon> {
    name: string = '';
    scope: number = 0;
    damage: number = 0;
    level: number = 0;
    exposureRate: number = 0;
    image: string = '';

    constructor(name: string, scope: number, damage: number, level: number, exposureRate: number, image: string) {
        this.name = name;
        this.scope = scope;
        this.damage = damage;
        this.level = level;
        this.exposureRate = exposureRate;
        this.image = image;
    }

    clone() : Weapon {
        return new Weapon(this.name, this.scope, this.damage, this.level, this.exposureRate, this.image);
    }

    deepClone() : Weapon {
        return this.clone();
    } 

    toString() {
        return 'Name: ' + this.name + ', scope: ' + this.scope  + ', damage: ' + this.damage  + ', level: ' + this.level  + ', exposure rate: ' + this.exposureRate  + ', image: ' + this.image;
    }
}