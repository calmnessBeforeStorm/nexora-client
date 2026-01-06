'use client';

import { AuthForm } from '@/features/auth-form';
import { ThemeToggle } from '@/features/theme-toggle';
import { AnimationsToggle } from '@/features/animations-toggle';
import { AnimatedBackground } from '@/shared/ui/animated-background';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/entities/auth/model/store';

export default function Home() {
  const user = useAuthStore((s) => s.user);
  const isHydrated = useAuthStore((s) => s.isHydrated);
  const router = useRouter();

  // Пока не гидратирован — не показываем ничего (убирает микрофликер)
  if (!isHydrated) return null;

  // Редирект в useEffect, когда пользователь авторизован
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, router]);

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