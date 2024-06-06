class QueueNode {
    value: number
    next: QueueNode | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class Queue {
    head: QueueNode | null
    tail: QueueNode | null
    length: number

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(node: QueueNode): void {
        if (!this.tail) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length += 1
    }

    deque(): number | null {
        if (!this.head) {
            return null
        }

        if (this.head === this.tail) {
            this.tail = null
        }

        const head = this.head
        this.head = this.head.next

        head.next = null;
        this.length -= 1;
        return head.value;
    }
}

const queue = new Queue()
console.log(queue)
const n1 = new QueueNode(1)
queue.enqueue(n1)
console.log(queue)
const n2 = new QueueNode(2)
queue.enqueue(n2)
console.log(queue)
const n3 = new QueueNode(3)
queue.enqueue(n3)
console.log(JSON.stringify(queue))
let value = queue.deque()
console.log(value)
console.log(queue)
value = queue.deque()
console.log(value)
console.log(queue)
value = queue.deque()
console.log(value)
console.log(queue)
value = queue.deque()
console.log(value)
console.log(queue)
