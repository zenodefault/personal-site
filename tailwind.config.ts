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
        xl: ['16px', '26px'],
        '2xl': ['20px', '32px'],
        '3xl': ['24px', '36px'],
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
        'signal-glow': '0 0 20px rgb(var(--color-signal) / 0.3)',
      },
      dropShadow: {
        'signal-glow': '0 0 8px rgb(var(--color-signal) / 0.6)',
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
        flicker: {
          '0%': { opacity: '0.97' },
          '5%': { opacity: '0.95' },
          '10%': { opacity: '0.9' },
          '15%': { opacity: '0.95' },
          '20%': { opacity: '0.98' },
          '25%': { opacity: '0.95' },
          '30%': { opacity: '0.9' },
          '35%': { opacity: '0.93' },
          '40%': { opacity: '0.95' },
          '45%': { opacity: '0.9' },
          '50%': { opacity: '0.98' },
          '55%': { opacity: '0.95' },
          '60%': { opacity: '0.92' },
          '65%': { opacity: '0.95' },
          '70%': { opacity: '0.9' },
          '75%': { opacity: '0.95' },
          '80%': { opacity: '0.98' },
          '85%': { opacity: '0.95' },
          '90%': { opacity: '0.9' },
          '95%': { opacity: '0.95' },
          '100%': { opacity: '0.98' },
        },
      },
      animation: {
        blink: 'blink 1.15s steps(1, end) infinite',
        float: 'float 8s ease-in-out infinite',
        reveal: 'reveal 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        flicker: 'flicker 0.15s infinite',
      },
      transitionDuration: {
        instant: '150ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
