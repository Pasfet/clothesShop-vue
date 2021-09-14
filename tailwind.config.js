module.exports = {
  purge: ['./components/**/*.{vue,js}', './pages/**/*.vue', './nuxt.config.js'],
  darkMode: false,
  important: true,
  theme: {
    maxWidth: {
      '5xl': '1140px'
    },
    extend: {
      colors: {
        primary: '#f16d7f',
        intro: '#f1e4e6',
        'featured-text': '#9f9f9f',
        'featured-card': '#f8f8f8',
        'featured-card-desc': '#5d5d5d',
        'feedback-subs-color': '#e1e1e1',
        'breadcrumbs-bg': '#f8f3f4',
        'check-color': '#f5f3f3'
      },
      fill: {
        white: '#fff',
        primary: '#f16d7f',
        black: '#000'
      },
      spacing: {
        inherit: 'inherit'
      },
      minHeight: {
        360: '360px'
      },
      minWidth: {
        275: '275px'
      },
      height: {
        header: '70px',
        mdIntro: 'calc(100vh - 70px)',
        '2xl-h': '768px',
        '20px': '20px',
        25: '25px',
        '32px': '32px',
        '40px': '40px',
        90: '90px',
        420: '420px',
        768: '768px'
      },
      maxWidth: {
        270: '270px',
        310: '310px',
        360: '360px',
        400: '400px',
        550: '550px'
      },
      width: {
        '20px': '20px',
        25: '25px',
        '32px': '32px',
        40: '40px',
        90: '90px',
        140: '140px',
        160: '160px',
        230: '230px',
        260: '260px',
        345: '345px',
        360: '360px',
        1140: '1140px'
      },
      backgroundImage: {
        'index-intro': "url('~assets/bg-intro.png')",
        'feedback-bg': "url('~/assets/feedback/bg-feedback.jpg')"
      },
      backgroundPosition: {
        'intro-pos': '-200px bottom',
        'feedback-pos-sm': '-400px bottom',
        'feedback-pos-md': '0 0'
      },
      gridTemplateColumns: {
        offer: 'repeat(3, 1fr)'
      },
      borderWidth: {
        1: 1
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    variants: {
      extend: {
        svgFill: ['hover', 'group-hover']
      }
    },
    plugins: []
  }
};
