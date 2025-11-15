interface Authenticatable {
  email: string
  password: string

  login(): void
  logout(): void
}

interface Authenticatable {
  role: string
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin'
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public role: string
  ) {}

  login(): void {}
  logout(): void {}
}

const farid: Authenticatable = {
  email: 'farid@gmail.com',
  password: '123',
  role: 'user',
  login: () => {},
  logout: () => {},
}
