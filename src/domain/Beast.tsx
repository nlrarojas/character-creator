import ICharacter from './ICharacter';
import Weapon from './Weapon';

export default class Beast implements ICharacter {
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
        return new Beast(
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
}
