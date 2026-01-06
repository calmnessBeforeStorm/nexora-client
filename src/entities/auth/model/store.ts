'use client';

import { RoleDefinition } from '@/shared/api/roles.api';
import { create } from 'zustand';
import { Session, User } from './types';
import { authApi } from '@/shared/api/auth.api';
import { sessionStorage } from '@/shared/lib/cookies';
import { rolesApi } from '@/shared/api/roles.api';

interface AuthState {
  user: User | null;
  token: string | null;
  isHydrated: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;

  availableRoles: RoleDefinition[];  // динамические роли
  fetchRoles: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isHydrated: false,

  async login(email, password) {
    const session = await authApi.login(email, password);
    sessionStorage.save(session);

    set({
      user: session.user,
      token: session.token,
    });
  },

  async logout() {
    await authApi.logout();
    sessionStorage.clear();

    set({ user: null, token: null });
  },

  async hydrate() {
    const session = await authApi.getSession();
    set({
      user: session?.user ?? null,
      token: session?.token ?? null,
      isHydrated: true,
    });
  },

  availableRoles: [],
  
  async fetchRoles() {
    const roles = await rolesApi.getRoles();
    set({ availableRoles: roles });
  },
}));
