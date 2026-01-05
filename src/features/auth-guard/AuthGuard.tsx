'use client';

import { useAuthStore } from '@/entities/auth/model/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, hydrate, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    hydrate();
  }, []);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user]);

  if (isLoading) return null;

  return <>{children}</>;
};
