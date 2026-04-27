import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        signal: 'rgb(var(--color-signal) / <alpha-value>)',
        mist: 'rgb(var(--color-mist) / <alpha-value>)',
        textPrimary: 'rgb(var(--color-text-primary) / <alpha-value>)',
        textSecondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        textInverse: 'rgb(var(--color-text-inverse) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', 'monospace'],
        mono: ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        xs: ['11px', '18px'],
        sm: ['12px', '20px'],
        md: ['13px', '22.1px'],
        lg: ['14px', '22.1px'],
      },
      spacing: {
        1: '8px',
        2: '10px',
        3: '12px',
        4: '14px',
        5: '16px',
        6: '20px',
        7: '22px',
        8: '32px',
      },
      borderRadius: {
        xs: '4px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--color-signal) / 0.2)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgb(var(--color-text-primary) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-text-primary) / 0.05) 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.15s steps(1, end) infinite',
        float: 'float 8s ease-in-out infinite',
        reveal: 'reveal 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      transitionDuration: {
        instant: '150ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
