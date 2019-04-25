import ICharacter from './ICharacter';
import Weapon from './Weapon';

export default class LandWarrior implements ICharacter {
    name: string;
    appearance: string[];
    life: number;
    punchesPerTime: number;
    level: number;
    spaces: number;
    appearanceLevel: number;
    cost: number;
    weapon: Weapon;

    constructor(
        name: string,
        appearance: string[],
        life: number,
        punchesPerTime: number,
        level: number,
        spaces: number,
        appearanceLevel: number,
        cost: number,
        weapon: Weapon
    ) {
        this.name = name;
        this.appearance = appearance;
        this.life = life;
        this.punchesPerTime = punchesPerTime;
        this.level = level;
        this.spaces = spaces;
        this.appearanceLevel = appearanceLevel;
        this.cost = cost;
        this.weapon = weapon;
    }

    clone(): ICharacter {
        return new LandWarrior(
            this.name,
            this.appearance,
            this.life,
            this.punchesPerTime,
            this.level,
            this.spaces,
            this.appearanceLevel,
            this.cost,
            this.weapon
        );
    };

    deepClone(): ICharacter {
        return this.clone();
    };

    /*
    setName(name: string) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
    
    setAppearance(appearance: string []) {
        this.appearance = appearance;
    }

    getAppearance() {
        return this.appearance;
    }

    setLife(life: number) {
        this.life = life;
    }

    getLife() {
        return this.life;
    }

    setPunchesPerTime(punchesPerTime: number) {
        this.punchesPerTime = punchesPerTime;
    }

    getPunchesPerTime() {
        return this.punchesPerTime;
    }

    setAppearanceLevel(appearanceLevel: number) {
        this.appearanceLevel = appearanceLevel;
    }

    getAppearanceLevel() {
        return this.appearanceLevel;
    }

    setCost(cost: number) {
        this.cost = cost;
    }

    getCost() {
        return this.cost;
    }

    setWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    getWeapon() {
        return this.weapon;
    }*/
}
