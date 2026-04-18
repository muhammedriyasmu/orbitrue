/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',
        secondary: '#0284C7',
        lightBlue: '#F0F9FF',
        textDark: '#0F172A',
        textMuted: '#64748B',
        accent: '#E0F2FE',
        brandSlate: '#0F172A'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(2, 132, 199, 0.10)',
        card: '0 4px 20px rgba(15, 23, 42, 0.05)'
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 55%, #0284C7 100%)'
      }
    }
  },
  plugins: []
};
