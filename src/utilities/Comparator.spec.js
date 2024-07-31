"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = __importDefault(require("./Comparator"));
const chai_1 = require("chai");
describe("Test comparator", () => {
    it("can compare normal value", () => {
        const compare = new Comparator_1.default();
        chai_1.assert.isTrue(compare.equal(1, 1));
        chai_1.assert.isFalse(compare.greaterThan(1, 2));
        chai_1.assert.isTrue(compare.lessThan(1, 2));
    });
});
