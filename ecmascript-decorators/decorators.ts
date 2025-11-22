function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log('logger decorator')
  console.log(target)
  console.log(ctx)

  return class extends target {
    constructor(...args: any[]) {
      super(...args)
      console.log('class constructor')
      console.log(this)
    }
  }
}

@logger
class Person {
  name = 'Farid'

  greet() {
    console.log('Hi, I am ' + this.name)
  }
}

const farid = new Person()
const sumbul = new Person()