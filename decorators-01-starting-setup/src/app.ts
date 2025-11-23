function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId)
    const person = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = person.name
    }
  }
}

@WithTemplate('<h1>My Person Object 🥺</h1>', 'app')
class Person {
  name = 'Farid'

  constructor() {
    console.log('Creating person object...')
  }
}

const farid = new Person()

console.log(farid)
