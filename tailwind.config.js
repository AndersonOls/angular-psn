/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sahdow': '0px 0px 6px 0px rgba(0, 0, 0, 0.5)',
      }
    }
  },
  plugins: [],
}