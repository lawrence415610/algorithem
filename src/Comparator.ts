export default class Comparator<T> {
  private compare: Function;

  constructor(compareFunction: Function = Comparator.defaultCompareFunction) {
    this.compare = compareFunction;
  }

  public static defaultCompareFunction(a: number, b: number): 0 | 1 | -1 {
    if (a === b) return 0;
    return a - b < 0 ? -1 : 1;
  }

  public equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0 || this.compare(a, b);
  }

  public lessThan(a: number, b: number): boolean {
    return this.compare(a, b) < 0;
  }

  public greaterThan(a: number, b: number): boolean {
    return this.compare(a, b) > 0;
  }
}
