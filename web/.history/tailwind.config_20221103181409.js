/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      colors: {
        ignite: {
          500: '#129e57'
        }
      }
    },
  },
  plugins: [],
}