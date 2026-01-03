import clsx from 'clsx';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gray' | 'green' | 'blue' | 'orange' | 'red';
  className?: string;
}

export function Badge({ children, variant = 'gray', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-transparent",
        {
          'bg-gray-100 text-gray-800': variant === 'gray',
          'bg-green-100 text-green-800': variant === 'green',
          'bg-blue-100 text-blue-800': variant === 'blue',
          'bg-orange-100 text-orange-800': variant === 'orange',
          'bg-red-100 text-red-800': variant === 'red',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
