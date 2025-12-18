/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        poppins400: ['Poppins_400Regular'],
        poppins500: ['Poppins_500Medium'],
        poppins600: ['Poppins_600SemiBold'],
        poppins700: ['Poppins_700Bold'],
      },
    },
  },
  plugins: [],
};
