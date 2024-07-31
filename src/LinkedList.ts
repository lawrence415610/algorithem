import Comparator from "./Comparator";

type NullableListNode<T> = ListNode<T> | null;
type FindOptions<T> = {
  value?: T;
  callback?: (value?: T) => boolean;
};
interface ILinkedList<T> {
  prepend: (value: T) => this;
  append: (value: T) => this;
  insert: (value: T, index: number) => this;
  deleteHead: () => this;
  deleteTail: () => this;
  delete: (index: number) => this;
  printAll: () => void;
  find: (options: FindOptions<T>) => NullableListNode<T>;
}

class ListNode<T> {
  private _value: T;
  private _next: NullableListNode<T>;

  constructor(value: T, next: NullableListNode<T> = null) {
    this._value = value;
    this._next = next;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }

  get next(): NullableListNode<T> {
    return this._next;
  }

  set next(next: NullableListNode<T>) {
    this._next = next;
  }
}

export class LinkedList<T> implements ILinkedList<T> {
  private _head: NullableListNode<T>;
  private _tail: NullableListNode<T>;
  private _size: number;
  private compare: Comparator<T>;

  constructor(compareFunction?: Function) {
    this._head = null;
    this._tail = null;
    this._size = 0;
    this.compare = new Comparator(compareFunction);
  }

  get head(): NullableListNode<T> {
    return this._head;
  }

  get tail(): NullableListNode<T> {
    return this._tail;
  }

  get size(): number {
    return this._size;
  }

  find(options: FindOptions<T>): NullableListNode<T> {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (options.callback && options.callback(currentNode.value)) {
        return currentNode;
      }

      if (
        options.value !== undefined &&
        this.compare.equal(currentNode.value, options.value)
      ) {
        return currentNode;
      }

      currentNode != currentNode.next;
    }
    return null;
  }

  prepend(value: T): this {
    const newNode = new ListNode(value, this.head);
    this._head = newNode;
    if (!this._tail) {
      this._tail = newNode;
    }
    ++this._size;
    return this;
  }

  append(value: T): this {
    const newNode = new ListNode(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
      ++this._size;
      return this;
    }

    this._tail!.next = newNode;
    this._tail = newNode;
    ++this._size;
    return this;
  }

  delete(index: number): this {
    if (this._head === null) return this;
    let currentNode = this._head;
    let count = 1;
    while (currentNode) {
      if (count === index) break;
      if (currentNode.next) {
        currentNode = currentNode.next;
        count++;
      } else {
        throw new Error("index out of range");
      }
    }
    const currentNextNextNode = currentNode.next?.next;
    currentNode.next = currentNextNextNode!;
    return this;
  }

  deleteHead(): this {
    if (this._head === null) {
      this._tail = null;
      this._size = 0;
      return this;
    }

    if (this._head.next) {
      this._head = this._head.next;
      this._size--;
    } else {
      this._head = null;
      this._tail = null;
      this._size = 0;
    }

    return this;
  }

  deleteTail(): this {
    if (this._head === null) return this;
    let currentNode = this._head;
    while (currentNode) {
      if (currentNode!.next!.next === null) break;
      currentNode = currentNode.next!;
    }
    currentNode!.next = null;
    this._tail = currentNode;
    return this;
  }

  insert(value: T, index: number): this {
    if (index < 0) throw new Error("index must be positive");
    if (index > this.size) throw new Error("out of range");
    if (index === 0) {
      this.prepend(value);
    }
    const newNode = new ListNode(value);
    let currentNode = this._head;
    let count = 1;
    while (currentNode) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }
    const currentNextNode = currentNode!.next;
    currentNode!.next = newNode;
    newNode.next = currentNextNode;
    ++this._size;

    return this;
  }

  printAll() {
    let head = this._head;
    while (head) {
      console.log(head!.value);
      head = head.next;
    }
  }
}
