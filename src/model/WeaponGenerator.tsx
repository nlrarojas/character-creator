import JSONFileProcessor from './JSONFIleProcessor';
import Weapon from '../domain/Weapon';
import file from '../data/weapons.json';

export default class WeaponGenerator {
    getWeapons(){
        const weapons = JSONFileProcessor.getInstance().readFile(file);
        let weaponList: Weapon[] = [];
        
        weapons.map((weapon: Weapon) => {            
            const { name, scope, damage, level, exposureRate, image } = weapon;
            weaponList.push(new Weapon(name, scope, damage, level, exposureRate, image));
        });
        return weaponList;
    }
}
