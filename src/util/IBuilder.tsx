import React from 'react';
import { IPrototype } from './IPrototype';
import ICharacter from '../domain/ICharacter';

export interface IBuilder <T> {
    build (): IPrototype<ICharacter>;
}