module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'ml-yellow': '#FFD700',
        'ml-yellow-dark': '#E6C200',
        'ml-gray-1': '#1a1a1a',
        'ml-gray-2': '#111111'
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: []
}
