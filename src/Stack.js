"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const LinkedList_1 = require("./LinkedList");
class Stack {
    constructor() {
        this._list = new LinkedList_1.LinkedList();
    }
    push(value) {
        this._list.prepend(value);
        return this;
    }
    pop() {
        if (this._list.size === 0)
            return null;
        const head = this._list.head;
        this._list.deleteHead();
        return head.value;
    }
    peek() {
        return this._list.head.value;
    }
}
exports.Stack = Stack;
