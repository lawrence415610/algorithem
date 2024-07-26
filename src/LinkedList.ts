type NullableListNode<T> = ListNode<T> | null;
interface ILinkedList<T> {
  prepend: (value: T) => this;
  append: (value: T) => this;
  insert: (value: T, index: number) => this;
  printAll: () => void;
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

  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
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
