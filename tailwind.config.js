/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0D1B2A',
        'navy-mid': '#1A2E45',
        'navy-light': '#243B55',
        'sg-gold': '#B8923A',
        'sg-gold-light': '#D4AF62',
        'sg-gold-bright': '#E8C87A',
        'parchment': '#F5EFE0',
        'warm-white': '#E8E2D4',
        'bg-base': '#FFFFFF',
        // legacy aliases kept for backward-compat with existing components
        'bg-surface': '#FDFBF7',
        'bg-elevated': '#F5F2EB',
        'gold-main': '#B8923A',
        'gold-bright': '#D4AF62',
        'gold-dim': 'rgba(184, 146, 58, 0.08)',
        'blue-accent': '#1A2E45',
        'text-main': '#2C363F',
        'text-muted': '#718096',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        // legacy aliases
        title: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        reading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
