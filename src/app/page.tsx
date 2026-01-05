'use client';

import { AuthForm } from '@/features/auth-form';
import { ThemeToggle } from '@/features/theme-toggle';
import { AnimationsToggle } from '@/features/animations-toggle';
import { AnimatedBackground } from '@/shared/ui/animated-background';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/entities/auth/model/store';
import { trackLoginRedirect } from '@/shared/lib/login-redirect-tracker';
import { useNotificationsStore } from '@/entities/notifications/model/store';

export default function Home() {

  const { user, hydrate } = useAuthStore();
  const router = useRouter();

  const push = useNotificationsStore((s) => s.push);

  useEffect(() => {
    hydrate();
  }, []);

  useEffect(() => {
    if (user) {
      const count = trackLoginRedirect();
      if (count >= 3) push('warning', 'Похоже, вы зациклились при попытке войти в систему. Проверьте URL-адрес на наличие ошибок.');
      router.replace('/dashboard');
    }

  }, [user]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#09090b] transition-colors duration-300 font-sans relative overflow-hidden">

      <AnimatedBackground />

      <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-3">
        <ThemeToggle />
        <AnimationsToggle />
      </div>

      <main className="flex flex-col items-center gap-6 relative z-10">
        <AuthForm type="login" />

        <button className="text-slate-500 dark:text-zinc-500 hover:text-brand text-xs font-semibold transition-colors uppercase tracking-widest">
          Забыли пароль?
        </button>
      </main>
    </div>
  );
}