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

type Permissions = AppUser['permissions']
