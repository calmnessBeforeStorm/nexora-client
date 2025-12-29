'use client';

import { Button } from '@/shared/ui/button';

export const AuthForm = ({ type }: { type: 'login' | 'register' }) => {
  return (
    <form className="
      flex flex-col gap-6 w-[380px] p-8 
      bg-white dark:bg-[#1A1A1B] 
      rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none
      border border-slate-300 dark:border-white/5
    ">
      <div className="space-y-1 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
          Какая-та<span className="text-brand">.</span>Система
        </h2>
        <p className="text-slate-500 dark:text-zinc-400 text-sm">
          {type === 'login' ? 'Добро пожаловать' : 'Регистрация нового сотрудника'}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="auth-email" className="text-xs font-semibold text-slate-700 dark:text-zinc-400 ml-1">
            Email
          </label>
          <input 
            id="auth-email"
            name="email"
            aria-label="Email"
            required
            type="email" 
            className="
              w-full p-2.5 rounded-lg border text-sm transition-all outline-none
              bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400
              focus:bg-white focus:border-brand focus:ring-1 focus:ring-brand
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
            "
            placeholder="arman@example.com"
          />
        </div>
        
        <div className="space-y-1.5">
          <label htmlFor="auth-password" className="text-xs font-semibold text-slate-700 dark:text-zinc-400 ml-1">
            Пароль
          </label>
          <input 
            id="auth-password"
            name="password"
            aria-label="Пароль"
            required
            type="password" 
            className="
              w-full p-2.5 rounded-lg border text-sm transition-all outline-none
              bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400
              focus:bg-white focus:border-brand focus:ring-1 focus:ring-brand
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
            "
            placeholder="••••••••"
          />
        </div>
      </div>

      <Button type="submit">
        {type === 'login' ? 'Войти в систему' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
};