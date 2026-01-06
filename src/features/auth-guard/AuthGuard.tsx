'use client';

import { useAuthStore } from '@/entities/auth/model/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((s) => s.user);
  const isHydrated = useAuthStore((s) => s.isHydrated);
  const hydrate = useAuthStore((s) => s.hydrate);

  const router = useRouter();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    // Редирект в useEffect, когда известно что нет пользователя
    if (isHydrated && !user) {
      router.replace('/');
    }
  }, [isHydrated, user, router]);

  // Пока не гидратирован — не показываем защищённый контент
  if (!isHydrated) return null;

  return <>{children}</>;
};
