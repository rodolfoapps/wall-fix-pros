/** @type {import('tailwindcss').Config} */

// Brand palette derived from the Wall Fix Pro logo (signal red + charcoal/steel gray).
// `blue`/`orange` are remapped on purpose: the templates were written against Tailwind's
// stock blue/orange, so overriding those scales re-skins the whole site consistently.
const red = {
  50: '#fef2f2',
  100: '#fde3e3',
  200: '#fbc9c9',
  300: '#f6a0a0',
  400: '#ee6b6b',
  500: '#d7262b', // logo red
  600: '#bf1e23',
  700: '#9f1a1e',
  800: '#83181b',
  900: '#6d191b',
  950: '#3b0a0b',
}

const ink = {
  50: '#f7f6f3', // warm off-white for light sections
  100: '#eeede9',
  200: '#dcdbd6',
  300: '#bdbdb8',
  400: '#8a8d91', // logo steel gray
  500: '#62666c',
  600: '#43474d',
  700: '#31353b',
  800: '#23262b',
  900: '#17191d',
  950: '#0e1012',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: ink,
        orange: red,
        'brand-blue': ink,
        'brand-orange': red,
        brand: red,
        ink,
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Barlow', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,16,18,.06), 0 8px 24px -12px rgba(14,16,18,.18)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
