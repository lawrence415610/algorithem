"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
class HashTable {
    constructor(hashTableSize = 32) {
        this.buckets = Array(hashTableSize)
            .fill(null)
            .map(() => new LinkedList_1.LinkedList());
        this.keys = {};
    }
    hash(key) {
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);
        return hash % this.buckets.length;
    }
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
    }
}
