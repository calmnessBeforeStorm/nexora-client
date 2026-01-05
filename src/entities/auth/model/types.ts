export type Role = 'admin' | 'manager' | 'user';

export interface User {
  id: string;
  email: string;
  role: Role;
}

export interface Session {
  token: string;
  user: User;
}
