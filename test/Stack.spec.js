"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Stack_1 = require("../src/Stack");
describe("Test Stack", () => {
    it("can push element in the stack and peek it", () => {
        const newStack = new Stack_1.Stack();
        newStack.push(1).push(2).push(3).push(4);
        chai_1.assert.equal(newStack.peek(), 4);
    });
    it("can pop an element", () => {
        const newStack = new Stack_1.Stack();
        newStack.push(1).push(2).push(3).push(4);
        const result = newStack.pop();
        chai_1.assert.equal(result, 4);
        const emptyStack = new Stack_1.Stack();
        chai_1.assert.isNull(emptyStack.pop());
    });
});
