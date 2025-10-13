let hobbies: string | number = 'Makan'
hobbies = 12

let users: Array<string | number>

let pair: [string, any]
pair = ['farid', () => {}]
// pair = ['farid', '', '']

let user: {
  name: string
  age: number
  hobbies: string[]
  role: {
    description: string
    id: number
  }
} = {
  name: 'Farid',
  age: 20,
  hobbies: ['Picturing', 'Design', 'Coding'],
  role: {
    description: 'An software engineering student',
    id: 1,
  },
}

let val: {} = [1, 2]

const someObj = {
  name: 'Farid',
}

let data: Record<string, number | string>

data = {
  nama: 'Farid',
  semester: 5,
}