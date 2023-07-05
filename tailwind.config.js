/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // màu chủ đạo
        primary: 'rgb(var(--primaryColor) / <alpha-value>)',
        primaryLigh: '#2A7487',
        secondary: '#A3D365',
        //Màu nền của dropdown
        third: 'var(--thirdColor)',
        //Màu nền khi hover
        hover: 'var(--hoverColor)',
        // Màu của icon trên sidebar
        sidebar_item: '#A8B2C2',
        // màu chữ đen đậm
        dark: '#262626',
        // Chữ nhạt
        lightText: '#878787',
        // Màu nền tổng thể (màu xám của nền)
        background: '#F5F5F5',
        // Màu nền tối tổng thể
        backgroundDark: '#DCDCDC',
        // Màu chữ
        textColor: '#4A4F57',
      },
      borderRadius: {
        base: '3px',
      },
      border: { dashed: '1px dashed #E9EBEC' },
      padding: {
        0.25: '1px',
      },
      fontSize: {
        default: '13px',
        title: '15px',
      },
      boxShadow: {
        // shadow box default
        box: '0px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      gap: {
        default: '16px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
