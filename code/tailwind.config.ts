import type { Config } from 'tailwindcss';
import colors from './tokens/colors.json';
import typography from './tokens/typography.json';
import spacing from './tokens/spacing.json';

// Single source of truth: all visual values come from /tokens/*.json.
// Never hardcode hex, px, or font names in components.

const fontSize = Object.fromEntries(
  Object.entries(typography.fontSize).map(([key, value]) => [
    key,
    [value.rem, { lineHeight: String(value.lineHeight) }],
  ])
);

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './examples/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        ink:     colors.ink,
        paper:   colors.paper,
        rule:    colors.rule,
        amber:   colors.amber,
        success: colors.semantic.success,
        warning: colors.semantic.warning,
        error:   colors.semantic.error,
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
        mono: typography.fontFamily.mono,
      },
      fontSize,
      fontWeight: {
        regular:  String(typography.fontWeight.regular),
        medium:   String(typography.fontWeight.medium),
        semibold: String(typography.fontWeight.semibold),
        bold:     String(typography.fontWeight.bold),
      },
      letterSpacing: {
        tight:  typography.tracking.tight,
        normal: typography.tracking.normal,
        wide:   typography.tracking.wide,
      },
      spacing:     spacing.spacing,
      borderRadius: spacing.radius,
      borderWidth:  spacing.borderWidth,
      boxShadow:    spacing.shadow,
      screens:      spacing.breakpoint,
      maxWidth: {
        ...spacing.container,
      },
      backgroundImage: {
        'hero-gradient': colors.gradients.hero,
      },
      aspectRatio: {
        slide: '16 / 9',
      },
    },
  },
  plugins: [],
};

export default config;
