/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        cream: '#FAF8F3',
        surface: '#FFFFFF',
        ink: '#0A0A0A',
        'ink-soft': '#2A2A2A',
        muted: '#8B8680',
        border: '#EAE6DF',
        accent: '#E85D04',
        peach: { 100: '#FFE8C8', 200: '#FFD7A8', 300: '#FFC58A' },
      },
      maxWidth: { page: '1280px' },
      letterSpacing: { caps: '0.18em' },
    },
  },
  plugins: [],
};
