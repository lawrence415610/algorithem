"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._queue = [];
    }
    get queue() {
        return this._queue;
    }
    isEmpty() {
        if (this._queue.length === 0) {
            return true;
        }
        return false;
    }
    peek() {
        if (this.isEmpty())
            return null;
        return this._queue[this._queue.length - 1];
    }
    enqueue(value) {
        this._queue.unshift(value);
        return this;
    }
    dequeue() {
        const returnedVal = this._queue.pop();
        return returnedVal;
    }
}
exports.Queue = Queue;
