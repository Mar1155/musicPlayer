/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/bg.jpg')",
      },
      colors: {
        'mygray': '#4D5562',
        'dark-gray': '#212936',
        'light-gray': '#E5E7EB',
        'mypink': '#C93B76',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}

