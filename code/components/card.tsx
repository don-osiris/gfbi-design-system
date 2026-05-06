import * as React from 'react';

// GFBI Card — default, accent, data.
// Default: paper-raised on rule border. Accent: cobalt left rule. Data: mono-friendly for KPI blocks.

type Tone = 'default' | 'accent' | 'data';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  eyebrow?: React.ReactNode;
  title?:   React.ReactNode;
  footer?:  React.ReactNode;
}

const tones: Record<Tone, string> = {
  default: 'bg-paper-raised border border-rule',
  accent:  'bg-paper-raised border border-rule border-l-4 border-l-primary-600',
  data:    'bg-ink-900 text-paper border border-ink-900',
};

export function Card({
  tone = 'default',
  eyebrow,
  title,
  footer,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-sm p-6 sm:p-8 shadow-sm ${tones[tone]} ${className}`}
      {...rest}
    >
      {eyebrow && (
        <div className={`eyebrow mb-3 ${tone === 'data' ? '!text-primary-300' : ''}`}>
          {eyebrow}
        </div>
      )}
      {title && (
        <h3 className={`mb-3 ${tone === 'data' ? 'text-paper' : 'text-ink-900'}`}>
          {title}
        </h3>
      )}
      <div className={tone === 'data' ? 'text-paper/85' : 'text-ink-700'}>
        {children}
      </div>
      {footer && (
        <div
          className={`mt-6 pt-4 border-t ${
            tone === 'data' ? 'border-ink-700' : 'border-rule'
          }`}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
