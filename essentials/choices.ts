// enum Role {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Guest = 'Guest',
// }

type Role = 'admin' | 'editor' | 'guest' | 'reader'
type User = {
  username: string
  age: number
  role: Role
  permission: string[]
}

let userRole: Role = 'guest'

userRole = 'editor'

let possibleResults: (1 | -1)[]

possibleResults = [1, 1, -1, -1]

function access(role: Role) {}
