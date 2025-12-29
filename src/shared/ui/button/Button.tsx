import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, className = '', variant = 'primary', ...props }: Props) => {
  const baseStyles = `
    py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200
    active:scale-[0.98] 
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      w-full
      bg-brand text-black hover:bg-brand-hover 
    `,
    secondary: `
      bg-slate-200 dark:bg-zinc-700 text-slate-900 dark:text-white
      hover:bg-slate-300 dark:hover:bg-zinc-600
    `,
  };

  const { type, ...rest } = props;
  const buttonType = (type as 'button' | 'submit' | 'reset') ?? 'button';

  return (
    <button
      type={buttonType}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};