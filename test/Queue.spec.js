"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Queue_1 = require("../src/Queue");
describe("Test Queue", () => {
    it("can initiate a queue", () => {
        const newQueue = new Queue_1.Queue();
        chai_1.assert.isEmpty(newQueue.queue);
    });
    it("can do enqueue", () => {
        const newQueue = new Queue_1.Queue();
        newQueue.enqueue("1");
        chai_1.assert.equal(newQueue.queue[0], "1");
    });
    it("can do dequeue", () => {
        const newQueue = new Queue_1.Queue();
        const result1 = newQueue.enqueue(1).enqueue(2).enqueue(3).dequeue();
        const result2 = newQueue.dequeue();
        chai_1.assert.equal(result1, 1);
        chai_1.assert.equal(result2, 2);
    });
    it("can tell if it is empty", () => {
        const newqueue1 = new Queue_1.Queue();
        const newqueue2 = new Queue_1.Queue();
        newqueue1.enqueue(1);
        chai_1.assert.isNotTrue(newqueue1.isEmpty());
        chai_1.assert.isTrue(newqueue2.isEmpty());
    });
    it("can peek the queue", () => {
        const newqueue = new Queue_1.Queue();
        newqueue.enqueue(1);
        newqueue.enqueue(2);
        chai_1.assert.equal(newqueue.peek(), 1);
        newqueue.dequeue();
        chai_1.assert.equal(newqueue.peek(), 2);
    });
});
