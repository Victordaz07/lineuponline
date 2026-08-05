/** @type {import('tailwindcss').Config} */

// Los colores del tema se definen como variables CSS (tripletas RGB) en
// src/index.css, con dos juegos: oscuro (por defecto) y claro ([data-theme='light']).
// Aquí solo se referencian con rgb(var(--x) / <alpha-value>) para que los
// modificadores de opacidad de Tailwind (p. ej. bg-navy-deep/95) sigan funcionando.
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Superficies (fondo de página → tarjetas → elevado). Se invierten en claro.
        'navy-deep': themed('navy-deep'),
        'navy-mid': themed('navy-mid'),
        'navy-light': themed('navy-light'),
        // Texto (primario / secundario). Se invierten en claro.
        'parchment': themed('parchment'),
        'warm-white': themed('warm-white'),
        // Acento de marca (dorado). Se mantiene dorado en ambos temas (más profundo en claro).
        'sg-gold': themed('sg-gold'),
        'sg-gold-light': themed('sg-gold-light'),
        'sg-gold-bright': themed('sg-gold-bright'),
        // "Tinta" constante: texto oscuro sobre superficies doradas/claras (igual en ambos temas).
        'ink': themed('ink'),
        // Acentos por categoría (temáticos: tono claro en oscuro, profundo en claro).
        'terracotta': themed('terracotta'),
        'jade': themed('jade'),
        'purple': themed('purple'),
        'info': themed('info'),
        // legacy aliases kept for backward-compat with existing components
        'bg-base': themed('navy-deep'),
        'bg-surface': themed('navy-mid'),
        'bg-elevated': themed('navy-light'),
        'gold-main': themed('sg-gold'),
        'gold-bright': themed('sg-gold-light'),
        'gold-dim': 'rgb(var(--sg-gold) / 0.08)',
        // constante (texto oscuro sobre azul claro / degradado oscuro fijo)
        'blue-accent': '#1A2E45',
        'text-main': themed('parchment'),
        'text-muted': themed('text-muted'),
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        ceremonial: ['Cinzel', 'Georgia', 'serif'],
        // legacy aliases
        title: ['Lora', 'Georgia', 'serif'],
        reading: ['Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgb(var(--shadow) / 0.35), 0 10px 30px -14px rgb(var(--shadow) / 0.45)',
        'card-hover': '0 6px 16px rgb(var(--shadow) / 0.4), 0 20px 44px -18px rgb(var(--shadow) / 0.55)',
        player: '0 -10px 44px -14px rgb(var(--shadow) / 0.55)',
      },
    },
  },
  plugins: [],
}
