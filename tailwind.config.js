/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xl': '1400px',
      'lg': "1200px",
      "semi-md": "1085px",
      "md": "900px",
       "sm": "672px",
       'xs': '442px',
       "fold": "280px"
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}
