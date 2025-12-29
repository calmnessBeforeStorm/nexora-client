import { render, screen } from '@testing-library/react';
import { AuthForm } from './AuthForm';

describe('AuthForm', () => {
  it('renders login form fields and submit button', () => {
    render(<AuthForm type="login" />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Войти в систему/i })).toBeInTheDocument();
  });
});
