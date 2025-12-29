import { AuthForm } from '@/features/auth-form';
import { ThemeToggle } from '@/features/theme-toggle';
import { AnimationsToggle } from '@/features/animations-toggle';
import { AnimatedBackground } from '@/shared/ui/animated-background';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#09090b] transition-colors duration-300 font-sans relative overflow-hidden">

      <AnimatedBackground />

      <ThemeToggle />
      <AnimationsToggle />

      <main className="flex flex-col items-center gap-6 relative z-10">
        <AuthForm type="login" />
        
        <button className="text-slate-500 dark:text-zinc-500 hover:text-brand text-xs font-semibold transition-colors uppercase tracking-widest">
          Забыли пароль?
        </button>
      </main>
    </div>
  );
}