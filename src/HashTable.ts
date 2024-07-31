import { LinkedList } from "./LinkedList";

interface IHashTable<T> {
  set: (key: string, value: T) => void;
}

class HashTable<T> {
  private buckets: Array<LinkedList<T>>;
  private keys: { [key: string]: number };
  constructor(hashTableSize = 32) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }

  private hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }

  public set(key: string, value: T) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
  }
}
