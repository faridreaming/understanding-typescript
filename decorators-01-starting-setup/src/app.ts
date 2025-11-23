function Logger(logString: string) {
  console.log('This is Logger decorator!')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('This is WithTemplate decorator!')
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object 🥺</h1>', 'app')
class Person {
  name = 'Farid'

  constructor() {
    console.log('Creating person object...')
  }
}

const farid = new Person()
console.log(farid)

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target)
  console.log(propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  _title: string
  #price: number

  constructor(title: string, price: number) {
    this._title = title
    this.#price = price
  }

  @Log2
  set title(val: string) {
    if (val.trim() !== '') {
      this._title = val
      return
    }
    throw new Error('Invalid title: Title should not be empty!')
  }

  set price(val: number) {
    if (val > 0) {
      this.#price = val
      return
    }
    throw new Error('Invalid price: Price should be possitive!')
  }

  get title() {
    return this._title
  }

  get price() {
    return this.#price
  }

  @Log3
  calculatePriceWithTax(@Log4 tax: number) {
    this.#price * (1 + tax)
  }
}
