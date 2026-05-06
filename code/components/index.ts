// AbuChip — public component surface.
// Import paths stay stable so any consumer (Next.js app, deck generator, report renderer)
// can rely on `@/components/<name>` regardless of internal refactors.

export { Button }       from './button';
export type { ButtonProps } from './button';

export { Card }         from './card';
export type { CardProps }   from './card';

export { Hero }         from './hero';
export type { HeroProps }   from './hero';

export { Stat }         from './stat';
export type { StatProps }   from './stat';

export { ChartFrame }   from './chart-frame';
export type { ChartFrameProps, LegendItem } from './chart-frame';

export { Slide }        from './slide';
export type { SlideProps }  from './slide';

export { ReportHeader } from './report-header';
export type { ReportHeaderProps, ReportMeta } from './report-header';
