import Comparator from "../src/Comparator";
import { assert } from "chai";

describe("Test comparator", () => {
  it("can compare normal value", () => {
    const compare = new Comparator();
    assert.isTrue(compare.equal(1, 1));
    assert.isFalse(compare.greaterThan(1, 2));
    assert.isTrue(compare.lessThan(1, 2));
  });

  it("can compare by using a custimized function", () => {
    function deepCompareObject<T>(obj1: T, obj2: T): boolean {
      if (obj1 === obj2) return true;
      if (
        typeof obj1 !== "object" ||
        obj1 === null ||
        typeof obj2 !== "object" ||
        obj2 === null
      ) {
        return false;
      }
      const keys1 = Object.keys(obj1) as (keyof T)[];
      const keys2 = Object.keys(obj2) as (keyof T)[];
      if (keys1.length !== keys2.length) return false;
      for (const key of keys1) {
        if (!keys2.includes(key) || !deepCompareObject(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }

    const obj1 = {
      name: "Lawrence",
      age: 14,
      hobbies: ["swimming", "kongfu"],
    };
    const obj2 = {
      name: "Lawrence",
      age: 14,
      hobbies: ["swimming", "kongfu"],
    };
    const compare = new Comparator(deepCompareObject);
    assert.isTrue(compare.equal(obj1, obj2));
  });
});
