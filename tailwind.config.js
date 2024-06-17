/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
      // ^ overwrites the default sans tw injects (check documentation @ https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js). Useful for overwriting the whole app's font
      // pizza: 'Roboto Mono, monospace', (would create a class named "font-pizza" to be used as needed)
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
