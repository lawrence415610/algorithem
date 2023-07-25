// binary heap is different from binary search tree, in binary heap, parent node is always larger than child node
// in binary heap, we only care about the order of the parent and child node, not the order of the sibling node
// in binary heap, we always fill the tree from left to right
class MaxBinaryHeap {
	constructor() {
		this.value = [41, 39, 22, 18, 27, 55];
	}
	// add a new element to the heap
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}
	// remove the root element from the heap
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			// trickle down
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}
			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex;
				}
			}
			if (swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
