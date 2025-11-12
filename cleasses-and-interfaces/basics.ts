class User {
  // name: string
  // age: number
  readonly hobbies: string[] = ['Photography']

  constructor(public name: string, private age: number) { }

  greet() {
    console.log('My age:', this.age)
  }
}

const user1 = new User('Farid', 20)
user1.hobbies.push('Coding')
console.log(user1.hobbies)
user1.greet()
