type NullableListNode<T> = ListNode<T> | null;
interface ILinkedList<T> {
  addToHead: (value: T) => void;
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
  constructor(head: NullableListNode<T> = null) {
    this._head = head;
  }

  get head(): NullableListNode<T> {
    return this._head;
  }

  addToHead(value: T) {
    const currentHead = this.head;
    const newHead = new ListNode(value, currentHead);
    this._head = newHead;
  }
}
