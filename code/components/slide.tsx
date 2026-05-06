import * as React from 'react';

// AbuChip Slide — 16:9 deck slide template.
// Three layouts: title (cover), content (body), section (divider).
// Renders at 1920x1080 by default but is fluid via aspect-ratio.
// Slide number and deck label sit in the bottom rule.

type Layout = 'title' | 'content' | 'section';

export interface SlideProps {
  layout?:    Layout;
  eyebrow?:   React.ReactNode;
  title?:     React.ReactNode;
  subtitle?:  React.ReactNode;
  number?:    number | string;
  deckLabel?: React.ReactNode;
  children?:  React.ReactNode;
}

export function Slide({
  layout = 'content',
  eyebrow,
  title,
  subtitle,
  number,
  deckLabel = 'AbuChip',
  children,
}: SlideProps) {
  const isTitle   = layout === 'title';
  const isSection = layout === 'section';

  return (
    <article
      className={
        'aspect-slide w-full max-w-[1920px] mx-auto relative rounded-sm overflow-hidden ' +
        (isSection
          ? 'bg-hero-gradient text-white'
          : 'bg-paper text-ink-900 border border-rule')
      }
    >
      <div className="absolute inset-0 flex flex-col p-10 sm:p-16 lg:p-20">
        {/* Header strip — eyebrow on cover/content, blank on section */}
        {!isSection && eyebrow && (
          <div className={`eyebrow ${isTitle ? '' : 'mb-8'}`}>{eyebrow}</div>
        )}

        {/* Body */}
        <div
          className={
            'flex-1 flex flex-col ' +
            (isTitle || isSection ? 'justify-center' : 'justify-start')
          }
        >
          {title && (
            <h2
              className={
                'font-semibold tracking-tight ' +
                (isTitle || isSection
                  ? 'mb-6'
                  : 'mb-4')
              }
              style={{
                fontSize: isTitle || isSection
                  ? 'clamp(2.5rem, 6vw, 5.5rem)'
                  : 'clamp(1.75rem, 4vw, 3rem)',
                lineHeight: 1.05,
                color: isSection ? 'white' : undefined,
              }}
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p
              className={
                isSection
                  ? 'text-white/85 text-xl max-w-3xl'
                  : 'text-ink-600 text-xl max-w-3xl mb-8'
              }
              style={{ lineHeight: 1.45 }}
            >
              {subtitle}
            </p>
          )}

          {children && (
            <div className={isTitle ? 'mt-12' : 'mt-2 flex-1'}>{children}</div>
          )}
        </div>

        {/* Footer strip — slide number + deck label */}
        <div
          className={
            'flex items-center justify-between mt-8 pt-4 border-t font-mono text-xs uppercase tracking-wide ' +
            (isSection
              ? 'border-white/30 text-white/80'
              : 'border-rule text-ink-500')
          }
        >
          <span>{deckLabel}</span>
          {number !== undefined && <span>{String(number).padStart(2, '0')}</span>}
        </div>
      </div>
    </article>
  );
}

export default Slide;
