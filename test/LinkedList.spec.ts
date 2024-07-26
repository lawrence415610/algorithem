import { assert } from "chai";
import { LinkedList } from "../src/LinkedList";

describe("Test Linked List", () => {
  it("create a new linked list", () => {
    const newLinkedList = new LinkedList();
    assert.isNull(newLinkedList.head);
  });
});
