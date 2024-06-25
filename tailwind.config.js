module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/globals.css',
  ],
  theme: {
    fontFamily: {
      burtons: 'burtons',
      jubilat: 'jubilat',
      space_mono: 'space_mono',
    },
    extend: {
      backgroundImage: {
        HELPII_IDEA: 'url("/helpii_idea.png")',
        gradient:
          'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
        gradient_helplit:
          'linear-gradient(60deg, #ff7f52, #f37055, #ef4e7b, #f37055, #ff7f52)',
      },
      animation: {
        opacity: 'opacity 0.25s ease-in-out',
        appearFromRight: 'appearFromRight 300ms ease-in-out',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        popup: 'popup 0.25s ease-in-out',
        shimmer: 'shimmer 3s ease-out infinite alternate',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        appearFromRight: {
          '0%': { opacity: 0.3, transform: 'translate(15%, 0px);' },
          '100%': { opacity: 1, transform: 'translate(0);' },
        },
        wiggle: {
          '0%, 20%, 80%, 100%': {
            transform: 'rotate(0deg)',
          },
          '30%, 60%': {
            transform: 'rotate(-2deg)',
          },
          '40%, 70%': {
            transform: 'rotate(2deg)',
          },
          '45%': {
            transform: 'rotate(-4deg)',
          },
          '55%': {
            transform: 'rotate(4deg)',
          },
        },
        popup: {
          '0%': { transform: 'scale(0.8)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '0 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: [
      //'retro', //comment to deactivate
      {
        mytheme: {
          'primary': '#ff7f52',
          'secondary': '#edd756',
          'accent': '#a752d8',
          'neutral': '#f4f0ed',
          'base-100': '#ECE3CA',
          'base-200': '#E4D8B4',
          'base-300': '#DBCA9A',
          'info': '#383533',
          'success': '#93c955',
          'warning': '#ffff00',
          'error': '#ff5555',
        },
      },
    ],
  },
};
