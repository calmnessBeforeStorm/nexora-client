import { Session } from '@/entities/auth/model/types';

const FAKE_USERS = [
  {
    id: '1',
    email: 'admin@erp.local',
    password: 'admin',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@erp.local',
    password: 'user',
    role: 'user',
  },
];

export const authApi = {
  async login(email: string, password: string): Promise<Session> {
    await new Promise((r) => setTimeout(r, 600)); 

    const user = FAKE_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Неверный логин или пароль');
    }

    return {
      token: 'mock-session-token',
      user: {
        id: user.id,
        email: user.email,
        role: user.role as any,
      },
    };
  },

  async logout() {
    await new Promise((r) => setTimeout(r, 300));
  },

  async getSession(): Promise<Session | null> {
    const raw = localStorage.getItem('session');
    return raw ? JSON.parse(raw) : null;
  },
};
