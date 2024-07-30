import { LinkedList } from "./LinkedList";
interface IStack<T> {
  push: (value: T) => this;
  peek: () => T | null;
  pop: () => T | null;
}

export class Stack<T> implements IStack<T> {
  private _list: LinkedList<T>;
  constructor() {
    this._list = new LinkedList();
  }

  push(value: T): this {
    this._list.prepend(value);
    return this;
  }

  pop(): T | null {
    if (this._list.size === 0) return null;
    const head = this._list.head;
    this._list.deleteHead();
    return head!.value;
  }

  peek(): T | null {
    return this._list.head!.value;
  }
}
