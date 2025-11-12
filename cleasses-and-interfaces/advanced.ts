class User {
  private _firstName: string = ''
  private _lastName: string = ''

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name')
    }
    this._firstName = name
  }

  set lastName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name')
    }
    this._lastName = name
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName
  }
}

const farid = new User()
farid.firstName = 'Muhammad'
farid.lastName = 'Farid'
console.log(farid.fullName)
