import React from 'react';

export default class JSONFileProcessor {
    static fileProcessor: JSONFileProcessor;

    static getInstance() {
        if (this.fileProcessor == null) {
            this.fileProcessor = new JSONFileProcessor();
        }
        return this.fileProcessor;
    }

    readFile(filePath: any) {        
        const weapons = JSON.parse(JSON.stringify(filePath));
        return weapons.weapons;
    }
}
