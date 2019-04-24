export interface IPrototype <T extends IPrototype <T> > {
    clone(): IPrototype <T>;
    deepClone(): IPrototype <T>;
}