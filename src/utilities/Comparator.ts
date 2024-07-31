export default class Comparator {
  private compare: Function;

  constructor(compareFunction: Function = Comparator.defaultCompareFunction) {
    this.compare = compareFunction;
  }

  public static defaultCompareFunction(a: number, b: number): 0 | 1 | -1 {
    if (a === b) return 0;
    return a - b < 0 ? -1 : 1;
  }

  public equal(a: number, b: number): boolean {
    return this.compare(a, b) === 0;
  }

  public lessThan(a: number, b: number): boolean {
    return this.compare(a, b) < 0;
  }

  public greaterThan(a: number, b: number): boolean {
    return this.compare(a, b) > 0;
  }
}
