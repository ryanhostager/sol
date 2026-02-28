import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'filled' | 'outlined' | 'bare';
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'h-8 px-3 text-sm min-w-[32px]',
  md: 'h-10 px-4 text-base min-w-[40px]',
  lg: 'h-12 px-6 text-lg min-w-[48px]',
};

const VARIANT_COLOR_CLASSES = {
  filled: {
    primary:
      'bg-orange-400 border-orange-400 text-white hover:bg-orange-500 active:bg-orange-600',
    secondary:
      'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    tertiary:
      'bg-gray-500 border-gray-500 text-white hover:bg-gray-600 active:bg-gray-700',
  },
  outlined: {
    primary:
      'bg-transparent border-2 border-orange-400 text-orange-400 hover:border-orange-500 hover:text-orange-500 active:border-orange-600 active:text-orange-600',
    secondary:
      'bg-transparent border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 active:border-blue-700 active:text-blue-700',
    tertiary:
      'bg-transparent border-2 border-gray-500 text-gray-500 hover:border-gray-600 hover:text-gray-600 active:border-gray-700 active:text-gray-700',
  },
  bare: {
    primary:
      'bg-transparent border-transparent text-orange-400 hover:bg-orange-50 hover:text-orange-500 active:bg-orange-100 active:text-orange-600',
    secondary:
      'bg-transparent border-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:text-blue-700',
    tertiary:
      'bg-transparent border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-600 active:bg-gray-200 active:text-gray-700',
  },
};

export const Button = ({
  label = 'Button',
  variant = 'filled',
  color = 'primary',
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) => {
  const sizeClasses = SIZE_MAP[size];
  const variantClasses = VARIANT_COLOR_CLASSES[variant][color];

  return (
    <button
      {...rest}
      className={`${sizeClasses} ${variantClasses} cursor-pointer rounded-full transition-colors duration-150 font-medium ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
