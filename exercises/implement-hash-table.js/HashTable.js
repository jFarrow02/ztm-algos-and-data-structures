/**
 * Exercise: Implement a Hash Table
 * 
 * Challenge:
 * 1. Create a "set" method that adds a new array (key-value pair) to
 * this.data
 * 
 * 2. Create a "get" method that retrieves the correct value from
 * this.data given a key
 */

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const hash = this._hash(key);
        // Avoid collisions
        if(!this.data[hash]) {
            this.data[hash] = [ key, value ];
        }
        // Return new data object
        return this.data;
    }

    get(key) {
        const index = this._hash(key);
        return this.data[index] ? this.data[index][1] : undefined;
        
    }

    keys() {
        const keysArr = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArr.push(this.data[i][0]);
            }
        }
        return keysArr;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 50);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.data);