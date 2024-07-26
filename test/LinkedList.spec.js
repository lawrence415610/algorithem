"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const LinkedList_1 = require("../src/LinkedList");
describe("Test Linked List", () => {
    it("create a new linked list", () => {
        const newLinkedList = new LinkedList_1.LinkedList();
        chai_1.assert.isNull(newLinkedList.head);
    });
});
