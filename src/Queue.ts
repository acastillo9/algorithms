class QueueNode<T> {
    value: T
    next: QueueNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class Queue<T> {
    head: QueueNode<T> | null
    tail: QueueNode<T> | null
    length: number

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(node: QueueNode<T>): void {
        if (!this.tail) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length += 1
    }

    deque(): T | null {
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

interface Persona {
    name: string;
    username?: string;
    email: string;
}

const persona1: Persona = {
    name: 'juan',
    email: 'juan@mail.com'
}

const persona2: Persona = {
    name: 'maria',
    username: 'juan01',
    email: 'juan@mail.com'
}

const persona3: Persona = {
    name: 'luis',
    username: 'juan01',
    email: 'juan@mail.com'
}

const queue = new Queue<Persona>()
console.log(queue)
const n1 = new QueueNode<Persona>(persona1)
queue.enqueue(n1)
console.log(queue)
const n2 = new QueueNode<Persona>(persona2)
queue.enqueue(n2)
console.log(queue)
const n3 = new QueueNode<Persona>(persona3)
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
