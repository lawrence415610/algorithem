import { assert } from "chai";
import { LinkedList } from "../src/LinkedList";

describe("Test Linked List", () => {
  it("create a new linked list", () => {
    const newLinkedList = new LinkedList();
    assert.isNull(newLinkedList.head);
  });

  it("can add a head of Type T to the list", () => {
    const numberLinkedList = new LinkedList();
    numberLinkedList.prepend(1);
    const stringLinkedList = new LinkedList();
    stringLinkedList.prepend("1");
    const objectLinkedList = new LinkedList();
    objectLinkedList.prepend({
      prop: 1,
      anotherProp: "hello",
    });

    assert.equal(numberLinkedList.head!.value, 1);
    assert.equal(stringLinkedList.head!.value, "1");
    assert.deepEqual(objectLinkedList.head!.value, {
      prop: 1,
      anotherProp: "hello",
    });
  });

  it("can add a second node to the list", () => {
    const numberLinkedList = new LinkedList();
    numberLinkedList.prepend(1);
    numberLinkedList.prepend(2);
    assert.equal(numberLinkedList.head!.next!.value, 1);
  });

  it("can insert an element", () => {
    const numberLinkedList = new LinkedList();
    numberLinkedList.append(0).append(1).append(2).append(3).append(4);
    numberLinkedList.insert(2.5, 1);
    assert.equal(numberLinkedList.head!.next!.value, 2.5);
  });
  it("should report error when insert wrong index", () => {
    const numberLinkedList = new LinkedList();
    numberLinkedList.append(0).append(1).append(2).append(3).append(4);
    assert.throws(() => {
      numberLinkedList.insert(10, 10);
    }, "out of range");
  });
});