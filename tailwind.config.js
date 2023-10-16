/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '0.5': '0.5px', // Agregamos este valor para 0.5px
        '0.7': '0.7px', // Ajustamos el valor a 0.7px
      },
      fontFamily: {
        sans: ['suisse', 'sans'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}
