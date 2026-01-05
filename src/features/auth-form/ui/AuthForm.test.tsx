import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AuthForm } from './AuthForm';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
}));

describe('AuthForm', () => {
  it('renders login form fields and submit button', () => {
    render(<AuthForm type="login" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /войти/i })
    ).toBeInTheDocument();
  });
});
