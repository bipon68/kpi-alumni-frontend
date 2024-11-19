/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
  	extend: {
  		screens: {
  			xs: '425px',
  			sm: '576px',
  			md: '768px',
  			lg: '991px',
  			xl: '1199px',
  			'2xl': '1399px',
  			'3xl': '1599px',
  			'4xl': '1799px',
  			'5xl': '1999px'
  		},
  		spacing: {
  			'11': '2.75rem',
  			'13': '3.25rem',
  			'18': '4.5rem',
  			'21': '5.25rem',
  			'22': '5.5rem',
  			'25': '6.25rem',
  			'30': '7.5rem',
  			'38': '9.5rem',
  			'42': '10.5rem',
  			'50': '12.5rem',
  			'66': '16.5rem',
  			'68': '17rem',
  			'76': '19rem',
  			'84': '21rem',
  			'86': '21.5rem',
  			'88': '22rem',
  			'90': '22.5rem',
  			'92': '23rem',
  			'94': '23.5rem',
  			'98': '24.5rem',
  			'100': '25rem',
  			'104': '26rem',
  			'1.5': '0.375rem',
  			'2.5': '0.625rem',
  			'3.5': '0.875rem',
  			'4.5': '1.125rem',
  			'5.5': '1.375rem',
  			'6.5': '1.625rem',
  			'7.5': '1.875rem',
  			'8.5': '2.125rem',
  			'12.5': '3.125rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
