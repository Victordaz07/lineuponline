/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#FFFFFF',
        'bg-surface': '#FDFBF7',
        'bg-elevated': '#F5F2EB',
        'gold-main': '#B8860B',
        'gold-bright': '#D4AF37',
        'gold-dim': 'rgba(184, 134, 11, 0.08)',
        'blue-accent': '#1B3A6B',
        'text-main': '#2C363F',
        'text-muted': '#718096',
      },
      fontFamily: {
        title: ['Cinzel', 'serif'],
        reading: ['Lora', 'serif'],
        ui: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

