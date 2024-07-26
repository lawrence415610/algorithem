"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class ListNode {
    constructor(value, next = null) {
        this._value = value;
        this._next = next;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get next() {
        return this._next;
    }
    set next(next) {
        this._next = next;
    }
}
class LinkedList {
    constructor(head = null) {
        this._head = head;
    }
    get head() {
        return this._head;
    }
    addToHead(value) {
        const currentHead = this.head;
        const newHead = new ListNode(value, currentHead);
        this._head = newHead;
    }
}
exports.LinkedList = LinkedList;
