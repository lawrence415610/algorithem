"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = __importDefault(require("../src/Comparator"));
const chai_1 = require("chai");
describe("Test comparator", () => {
    it("can compare normal value", () => {
        const compare = new Comparator_1.default();
        chai_1.assert.isTrue(compare.equal(1, 1));
        chai_1.assert.isFalse(compare.greaterThan(1, 2));
        chai_1.assert.isTrue(compare.lessThan(1, 2));
    });
    it("can compare by using a custimized function", () => {
        function deepCompareObject(obj1, obj2) {
            if (obj1 === obj2)
                return true;
            if (typeof obj1 !== "object" ||
                obj1 === null ||
                typeof obj2 !== "object" ||
                obj2 === null) {
                return false;
            }
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length)
                return false;
            for (const key of keys1) {
                if (!keys2.includes(key) || !deepCompareObject(obj1[key], obj2[key])) {
                    return false;
                }
            }
            return true;
        }
        const obj1 = {
            name: "Lawrence",
            age: 14
        };
        const obj2 = {
            name: "Lawrence",
            age: 14
        };
        const compare = new Comparator_1.default(deepCompareObject);
        chai_1.assert.isTrue(compare.equal(obj1, obj2));
    });
});
