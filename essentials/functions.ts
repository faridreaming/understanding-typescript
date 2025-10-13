function add(a: number, b: number) {
  let add = a + b
}

function print(type: 'console' | 'alert' = 'console', output: any): void {
  type === 'console' ? console.log(output) : alert(output)
}

let a: () => void = () => {
  console.log('a')
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage)
  throw new Error(errorMessage)
}

const logMsg = (msg: string) => {
  console.log(msg)
}

function performJob(cb: (m: string) => void) {
  cb('Job done!')
}

performJob(logMsg)

interface UserInterface {
  name: string
  age: number
  greet: () => void
}

class User implements UserInterface {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }
}
