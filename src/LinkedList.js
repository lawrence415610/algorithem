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
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    get head() {
        return this._head;
    }
    get tail() {
        return this._tail;
    }
    get size() {
        return this._size;
    }
    prepend(value) {
        const newNode = new ListNode(value, this.head);
        this._head = newNode;
        if (!this._tail) {
            this._tail = newNode;
        }
        ++this._size;
        return this;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            ++this._size;
            return this;
        }
        this._tail.next = newNode;
        this._tail = newNode;
        ++this._size;
        return this;
    }
    deleteHead() {
        if (this._head === null) {
            this._tail = null;
            this._size = 0;
            return this;
        }
        if (this._head.next) {
            this._head = this._head.next;
            this._size--;
        }
        else {
            this._head = null;
            this._tail = null;
            this._size = 0;
        }
        return this;
    }
    deleteTail() {
        if (this._head === null)
            return this;
        let currentNode = this._head;
        while (currentNode) {
            if (currentNode.next.next === null)
                break;
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this._tail = currentNode;
        return this;
    }
    insert(value, index) {
        if (index < 0)
            throw new Error("index must be positive");
        if (index > this.size)
            throw new Error("out of range");
        if (index === 0) {
            this.prepend(value);
        }
        const newNode = new ListNode(value);
        let currentNode = this._head;
        let count = 1;
        while (currentNode) {
            if (count === index)
                break;
            currentNode = currentNode.next;
            count++;
        }
        const currentNextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = currentNextNode;
        ++this._size;
        return this;
    }
    printAll() {
        let head = this._head;
        while (head) {
            console.log(head.value);
            head = head.next;
        }
    }
}
exports.LinkedList = LinkedList;
