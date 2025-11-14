class User {
  constructor(
    protected _firstName: string = '',
    protected _lastName: string = ''
  ) {
    if (_firstName.trim() === '' || _lastName.trim() === '')
      throw new Error('Invalid name')

    this._firstName = _firstName
    this._lastName = _lastName
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName
  }

  static classId = 1
  static greet() {
    console.log('Hello, my name is User!')
  }
}

class Employee extends User {
  constructor(
    protected _firstName: string = '',
    protected _lastName: string = '',
    private _jobTitle: string
  ) {
    super(_firstName, _lastName)
    if (_jobTitle.trim() === '') throw new Error('Invalid job title')
    this._jobTitle = _jobTitle
  }

  greet() {
    console.log(`Hello, my name is ${this.fullName}. I'm a ${this._jobTitle}.`)
  }

  static classId = 1.1
  static greet() {
    console.log('Hello, my name is Emplyee')
  }
}

const farid = new Employee('Muhammad', 'Farid', 'Chief Technology Officer')
farid.greet()
Employee.greet()

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

class Dialog extends UIElement {
  constructor(public idenfier: string, public type: 'positive' | 'negative') {
    super(idenfier)
  }
}
