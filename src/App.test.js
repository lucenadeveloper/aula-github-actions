import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './App';

describe('HomePage', () => {
  test('renders welcome message', () => {
    render(<HomePage />);
    const welcomeMessage = screen.getByText(/Bem-vindo à págna inicial!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders a button', () => {
    render(<HomePage />);
    const buttonElement = screen.getByText(/Clique aqui/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('changes message when button is clicked', () => {
    render(<HomePage />);
    const buttonElement = screen.getByText(/Clique aqui/i);
    fireEvent.click(buttonElement);
    const newMessage = screen.getByText(/Botão pressionado!/i);
    expect(newMessage).toBeInTheDocument();
  });
});
