import Comparator from "./Comparator";
import { assert } from "chai";

describe("Test comparator", () => {
  it("can compare normal value", () => {
    const compare = new Comparator();
    assert.isTrue(compare.equal(1, 1));
    assert.isFalse(compare.greaterThan(1, 2));
    assert.isTrue(compare.lessThan(1, 2));
  });
});
