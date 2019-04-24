import { IBuilder } from "../util/IBuilder";
import ICharacter from "../domain/ICharacter";
import WeaponPrototype from "./WeaponPrototype";
import Monster from "../domain/Monster";
import LandWarrior from "../domain/LandWarrior";
import Beast from "../domain/Beast";
import { AbstractFactory } from "../util/AbstractFactory";

export default class CharacterBuilder extends AbstractFactory implements IBuilder<ICharacter> {
    private type: string;
    private name: string = '';
    private appearance: string[] = [];
    private life: number = 0;
    private punchesPerTime: number = 0;
    private level: number = 0;
    private spaces: number = 0;
    private appearanceLevel: number = 0;
    private cost: number = 0;
    private weapon: any = [];

    constructor(type: string) {
        super();
        this.type = type;
    }

    public setName(name: string): CharacterBuilder {
        this.name = name;
        return this;
    }

    public setAppearance(appearance: string[]): CharacterBuilder {
        this.appearance = appearance;
        return this;
    }

    public setLife(life: number): CharacterBuilder {
        this.life = life;
        return this;
    }

    public setPunchesPerTime(punchesPerTime: number): CharacterBuilder {
        this.punchesPerTime = punchesPerTime;
        return this;
    }

    public setLevel(level: number): CharacterBuilder {
        this.level = level;
        return this;
    }

    public setSpaces(spaces: number): CharacterBuilder {
        this.spaces = spaces;
        return this;
    }

    public setAppearanceLevel(appearanceLevel: number): CharacterBuilder {
        this.appearanceLevel = appearanceLevel;
        return this;
    }

    public setCost(cost: number): CharacterBuilder {
        this.cost = cost;
        return this;
    }

    public setWeapon(weaponType: string): CharacterBuilder {
        this.weapon = WeaponPrototype.getPrototype(weaponType);
        return this;
    }

    build() {
        return this.factoryMethod(this.type);
    }

    factoryMethod(type: string) {
        let character: any = [];
        switch (this.type) {
            case this.MONSTER:
                character = new Monster(this.name, this.appearance, this.life, this.punchesPerTime, this.level,
                this.spaces, this.appearanceLevel, this.cost, this.weapon);
                break;
            case this.LAND_WARRIOR:
                character = new LandWarrior(this.name, this.appearance, this.life, this.punchesPerTime, this.level,
                this.spaces, this.appearanceLevel, this.cost, this.weapon);
                break;
            case this.BEAST:
                character = new Beast(this.name, this.appearance, this.life, this.punchesPerTime, this.level,
                this.spaces, this.appearanceLevel, this.cost, this.weapon);
                break;
            default:
        }        
        return character;
    }
}