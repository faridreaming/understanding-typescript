function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Farid'

  constructor() {
    console.log('Creating person object...')
  }
}

const farid = new Person()

console.log(farid)
