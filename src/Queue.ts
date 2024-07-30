interface IQueue<T> {
  enqueue: (value: T) => this;
  dequeue: () => T | undefined;
  isEmpty: () => boolean;
  /**
   * check the first item in the queue without taking it out
   */
  peek: () => T | null;
}

export class Queue<T> implements IQueue<T> {
  private _queue: Array<T>;
  constructor() {
    this._queue = [];
  }

  get queue() {
    return this._queue;
  }

  isEmpty(): boolean {
    if (this._queue.length === 0) {
      return true;
    }
    return false;
  }

  peek(): T | null{
    if(this.isEmpty()) return null;
    return this._queue[this._queue.length - 1];
  }

  enqueue(value: T): this {
    this._queue.unshift(value);
    return this;
  }

  dequeue(): T | undefined {
    const returnedVal = this._queue.pop();
    return returnedVal;
  }
}
