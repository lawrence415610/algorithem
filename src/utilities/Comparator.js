"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparator {
    constructor(compareFunction = Comparator.defaultCompareFunction) {
        this.compare = compareFunction;
    }
    static defaultCompareFunction(a, b) {
        if (a === b)
            return 0;
        return a - b < 0 ? -1 : 1;
    }
    equal(a, b) {
        return this.compare(a, b) === 0;
    }
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }
    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }
}
exports.default = Comparator;
