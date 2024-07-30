import { assert } from "chai";
import { Queue } from "../src/Queue";

describe("Test Queue", () => {
  it("can initiate a queue", () => {
    const newQueue = new Queue();
    assert.isEmpty(newQueue.queue);
  });

  it("can do enqueue", () => {
    const newQueue = new Queue();
    newQueue.enqueue("1");
    assert.equal(newQueue.queue[0], "1");
  });

  it("can do dequeue", () => {
    const newQueue = new Queue();
    const result1 = newQueue.enqueue(1).enqueue(2).enqueue(3).dequeue();
    const result2 = newQueue.dequeue();
    assert.equal(result1, 1);
    assert.equal(result2, 2);
  });

  it("can tell if it is empty", () => {
    const newqueue1 = new Queue();
    const newqueue2 = new Queue();
    newqueue1.enqueue(1);
    assert.isNotTrue(newqueue1.isEmpty());
    assert.isTrue(newqueue2.isEmpty());
  });

  it("can peek the queue", ()=>{
    const newqueue = new Queue();
    newqueue.enqueue(1);
    newqueue.enqueue(2);
    assert.equal(newqueue.peek(), 1);
    newqueue.dequeue();
    assert.equal(newqueue.peek(), 2);
  })
});
