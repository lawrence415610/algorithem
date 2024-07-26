"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const LinkedList_1 = require("../src/LinkedList");
describe("Test Linked List", () => {
    it("create a new linked list", () => {
        const newLinkedList = new LinkedList_1.LinkedList();
        chai_1.assert.isNull(newLinkedList.head);
    });
    it("can add a head of Type T to the list", () => {
        const numberLinkedList = new LinkedList_1.LinkedList();
        numberLinkedList.prepend(1);
        const stringLinkedList = new LinkedList_1.LinkedList();
        stringLinkedList.prepend("1");
        const objectLinkedList = new LinkedList_1.LinkedList();
        objectLinkedList.prepend({
            prop: 1,
            anotherProp: "hello",
        });
        chai_1.assert.equal(numberLinkedList.head.value, 1);
        chai_1.assert.equal(stringLinkedList.head.value, "1");
        chai_1.assert.deepEqual(objectLinkedList.head.value, {
            prop: 1,
            anotherProp: "hello",
        });
    });
    it("can add a second node to the list", () => {
        const numberLinkedList = new LinkedList_1.LinkedList();
        numberLinkedList.prepend(1);
        numberLinkedList.prepend(2);
        chai_1.assert.equal(numberLinkedList.head.next.value, 1);
    });
    it("can insert an element", () => {
        const numberLinkedList = new LinkedList_1.LinkedList();
        numberLinkedList.append(0).append(1).append(2).append(3).append(4);
        numberLinkedList.insert(2.5, 1);
        chai_1.assert.equal(numberLinkedList.head.next.value, 2.5);
    });
    it("should report error when insert wrong index", () => {
        const numberLinkedList = new LinkedList_1.LinkedList();
        numberLinkedList.append(0).append(1).append(2).append(3).append(4);
        chai_1.assert.throws(() => {
            numberLinkedList.insert(10, 10);
        }, "out of range");
    });
    it("can get the linkedlist size", () => {
        const numberLinkedList = new LinkedList_1.LinkedList();
        numberLinkedList.append(0).append(1).append(2).append(3).append(4);
        chai_1.assert.equal(numberLinkedList.size, 5);
    });
});
