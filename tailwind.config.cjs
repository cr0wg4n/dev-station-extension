/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    // }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        devstation: {
          primary: "#6C6CF9",
          secondary: "#E6820D",
          accent: "#181818",
          neutral: "#212121",
          'base-100': "#ffffff",
          background: "#F5F5F5",
          error: "#F71240",
          warning: "#E6820D",
          success: "#8DDC57",
        },
      },
    ],
  }
}