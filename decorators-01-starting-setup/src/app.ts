function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Farid'

  constructor() {
    console.log('Creating person object...')
  }
}

const farid = new Person()

console.log(farid)
