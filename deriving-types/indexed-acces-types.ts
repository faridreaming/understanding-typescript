type AppUser = {
  name: string
  age: number
  registeredAt: Date
  permissions: {
    name: string
    description: string
    value: boolean
  }[]
}

// type Permissions = AppUser['permissions']
// type Permission = Permissions[number]

type Permission = AppUser['permissions'][number]

type Names = string[]
type Name = Names[number]
