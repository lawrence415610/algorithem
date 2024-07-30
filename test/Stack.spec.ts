import { assert } from "chai";
import { Stack } from "../src/Stack";

describe("Test Stack", () => {
  it("can push element in the stack and peek it", () => {
    const newStack = new Stack();
    newStack.push(1).push(2).push(3).push(4);
    assert.equal(newStack.peek(), 4);
  });

  it("can pop an element", () => {
    const newStack = new Stack();
    newStack.push(1).push(2).push(3).push(4);
    const result = newStack.pop();
    assert.equal(result, 4);

    const emptyStack = new Stack();
    assert.isNull(emptyStack.pop());
  });
});
