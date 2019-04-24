import React from 'react';
import ICharacter from '../domain/ICharacter';
import { IPrototype } from './IPrototype';

export abstract class AbstractFactory {
    public abstract factoryMethod(type: string): IPrototype<ICharacter>;
    protected MONSTER: string = 'Monster';
    protected LAND_WARRIOR: string = 'Land Warrior';
    protected BEAST: string = 'Beast';
}