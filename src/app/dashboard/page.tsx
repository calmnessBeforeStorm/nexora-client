'use client';

import { AuthGuard } from '@/features/auth-guard/AuthGuard';
import { useAuthStore } from '@/entities/auth/model/store';
import { Button } from '@/shared/ui/button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNotificationsStore } from '@/entities/notifications/model/store';

export default function DashboardPage() {
  const { user, logout, hydrate } = useAuthStore();

  const router = useRouter();
  const push = useNotificationsStore((s) => s.push);

  useEffect(() => { hydrate(); }, []);

  return (
    <AuthGuard>
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Пользователь: {user?.email} ({user?.role})
        </p>

        <Button className="mt-6 w-auto" onClick={async () => {
            await logout();
            push('success', 'Вы вышли из аккаунта');
            router.push('/');
            }}>
          Выйти
        </Button>
      </div>
    </AuthGuard>
  );
}
