module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './comp/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        maingreen: '#00cc99',
        backgray: '#f2f2f2',
        lightgray: '#f9f9f9',
        textgray: '#8A8A8A',
      },
      borderRadius: {
        'bl-500': '0px 0px 0px 100px',
      },
      width: {
        '825': '825px',
      },
    },
  },
  plugins: [],
};
