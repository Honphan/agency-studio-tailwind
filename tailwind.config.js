tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#fed136',
        'primary-hover': '#eec126',
        dark: '#212529',
        'bg-light': '#f8f9fa',
        'text-main': '#343a40',
        'text-muted': '#6c757d',
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'sans-serif'],
        serif: ['"Droid Serif"', '"Helvetica Neue"', 'Arial', 'serif'],
        script: ['"Kaushan Script"', 'cursive'],
      },
      screens: {
        'md': '768px',  
        'lg': '992px', 
      }
    }
  }
}