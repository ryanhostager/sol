import React, { ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const VARIANT_CLASSES = {
  base: 'bg-neutral-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100',
  elevated:
    'bg-neutral-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 shadow-xl shadow-neutral-300/40 dark:shadow-[0_2px_12px_0_rgba(0,0,0,0.45)]',
};

const PADDING_CLASSES = {
  sm: 'p-2', // 8px
  md: 'p-3', // 12px
  lg: 'p-4', // 16px
};

export const Card = ({
  variant = 'base',
  padding = 'md',
  className = '',
  children,
  ...rest
}: CardProps) => {
  const variantClass = VARIANT_CLASSES[variant];
  const paddingClass = PADDING_CLASSES[padding];

  return (
    <div
      className={`${variantClass} ${paddingClass} rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
