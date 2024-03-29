/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bar': '#2E4F88',
        'state': '#1127ba',
        'light': '#81d3ef',
      },
      spacing: {
        '112': '52rem',
        '1': '4px',
        '2': '12px',
        '40': '160px',
        '72': '288px',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


