interface Tokens {
  token: string
  refreshToken: string
}

interface User extends Tokens {
  id: number
  username: string
  password: string
  phone: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  expiresInMins: number
  // address: string
  // postCode: number
}

export type { Tokens, User }
