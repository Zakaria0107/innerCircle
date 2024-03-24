/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothic-a1': ['"Gothic A1"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-home': "url('./images/HeroBackground.png')",
        'footer-img': "url('./images/footer image.png')",
        'condidates': "url('./images/for candidates.png')",
        'condidateMobile': "url('./images/condidateMobile.png')",
        'faqImage': "url('./images/faq.png')",
        'contactImg' : 'url(./images/contact.png)'
      }
    },
  },
  plugins: [],
}

