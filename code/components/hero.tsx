import * as React from 'react';

// AbuChip Hero — landing-page anchor block.
// Optional gradient-on-cobalt backdrop (the only approved gradient in the system).
// Mobile-first: stacks vertically, headline scales via clamp().

export interface HeroProps {
  eyebrow?:  React.ReactNode;
  title:     React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?:   { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?:  'paper' | 'cobalt';
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'paper',
}: HeroProps) {
  const isCobalt = variant === 'cobalt';

  return (
    <section
      className={
        isCobalt
          ? 'bg-hero-gradient text-white'
          : 'bg-paper text-ink-900'
      }
    >
      <div className="abu-container py-20 sm:py-28 lg:py-36">
        {eyebrow && (
          <p
            className={`eyebrow mb-6 ${
              isCobalt ? '!text-primary-200' : ''
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="font-semibold tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1.05 }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-6 max-w-2xl text-lg sm:text-xl ${
              isCobalt ? 'text-white/85' : 'text-ink-600'
            }`}
            style={{ lineHeight: 1.55 }}
          >
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className={
                  'inline-flex items-center justify-center h-12 px-6 rounded-sm font-medium text-base transition-colors abu-focus ' +
                  (isCobalt
                    ? 'bg-white text-primary-700 hover:bg-paper-sunken'
                    : 'bg-primary-600 text-white hover:bg-primary-700')
                }
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={
                  'inline-flex items-center justify-center h-12 px-6 rounded-sm font-medium text-base border transition-colors abu-focus ' +
                  (isCobalt
                    ? 'border-white/40 text-white hover:bg-white/10'
                    : 'border-rule text-ink-900 hover:bg-ink-50')
                }
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
