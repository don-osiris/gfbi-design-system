import * as React from 'react';

// GFBI Button — primary, secondary, ghost.
// Sharp 2px corners. Cobalt primary. 44px tap target on mobile.
// Always extends native <button> so a11y semantics stay intact.

type Variant = 'primary' | 'secondary' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  asChild?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-sm ' +
  'transition-colors duration-150 abu-focus disabled:opacity-50 disabled:cursor-not-allowed ' +
  'whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 ' +
    'shadow-sm border border-primary-600',
  secondary:
    'bg-paper-raised text-ink-900 border border-rule hover:border-ink-400 ' +
    'hover:bg-ink-50 active:bg-ink-100',
  ghost:
    'bg-transparent text-ink-900 hover:bg-ink-100 active:bg-ink-200 border border-transparent',
};

const sizes: Record<Size, string> = {
  sm: 'h-9  px-3 text-sm',
  md: 'h-11 px-5 text-base',  // 44px = HIG floor
  lg: 'h-12 px-6 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
