class ListNode<T> {
  next?: ListNode<T>

  constructor(public value: T) {}
}

class LinkedList<T> {
  #root?: ListNode<T>
  #tail?: ListNode<T>
  #length = 0

  add(value: T) {
    const node = new ListNode(value)
    if (!this.#root || !this.#tail) {
      this.#root = node
      this.#tail = node
    } else {
      this.#tail.next = node
      this.#tail = node
    }
    this.#length++
  }

  get length() {
    return this.#length
  }

  print() {
    let current = this.#root
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

const numberList = new LinkedList<number>()
const nameList = new LinkedList<string>()

nameList.add('pumbah')
nameList.add('svelte')
nameList.add('sumbul')
nameList.add('kay cenat')

console.log(`Length of the name list: ${nameList.length} 🥺`)
nameList.print()
