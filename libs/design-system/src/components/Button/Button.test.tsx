import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

it('renders button with label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});

it('calls onClick handler when clicked', () => {
  const handle = jest.fn();
  render(<Button label="Click" onClick={handle} />);
  fireEvent.click(screen.getByRole('button', { name: /click/i }));
  expect(handle).toHaveBeenCalledTimes(1);
});

it('applies size classes for sm, md and lg', () => {
  const { rerender } = render(<Button label="A" size="sm" />);
  expect(screen.getByRole('button', { name: /a/i })).toHaveClass('h-8');

  rerender(<Button label="B" size="md" />);
  expect(screen.getByRole('button', { name: /b/i })).toHaveClass('h-10');

  rerender(<Button label="C" size="lg" />);
  expect(screen.getByRole('button', { name: /c/i })).toHaveClass('h-12');
});

it('outlined variant uses border and color classes', () => {
  render(<Button label="Outlined" variant="outlined" color="secondary" />);
  const btn = screen.getByRole('button', { name: /outlined/i });
  expect(btn).toHaveClass('border-2');
  expect(btn).toHaveClass('border-blue-500');
  expect(btn).toHaveClass('text-blue-500');
});
