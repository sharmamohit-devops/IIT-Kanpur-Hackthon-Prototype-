export const dummyUsers = {
  user: {
    id: 'user_001',
    name: 'Alex Creator',
    email: 'alex@creator.com',
    password: 'demo123',
    role: 'user',
    avatar: 'AC',
  },
  business: {
    id: 'biz_001',
    name: 'Tech Solutions Inc',
    email: 'admin@techsolutions.com',
    password: 'demo123',
    role: 'business',
    avatar: 'TS',
  },
  admin: {
    id: 'admin_001',
    name: 'Sarah Admin',
    email: 'admin@sampark.com',
    password: 'admin123',
    role: 'admin',
    avatar: 'SA',
  },
}

export function validateLogin(email: string, password: string) {
  for (const user of Object.values(dummyUsers)) {
    if (user.email === email && user.password === password) {
      return user
    }
  }
  return null
}
