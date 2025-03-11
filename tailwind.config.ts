import type { Config } from 'tailwindcss'
import { websiteColor } from './app/ContentData/WebsiteContent'

export default {
  darkMode: ['class'],
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
      },
      // custom fontFamily
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        bricolage: ['Bricolage Grotesque'],
        gabarito: ['Gabarito'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // custom boxShadows
      boxShadow: {
        'custom-soft':
          '0px 9px 53px 0px rgba(0, 0, 0, 0.04), 0px 4.504px 26.526px 0px rgba(0, 0, 0, 0.03), 0px 2.713px 15.978px 0px rgba(0, 0, 0, 0.03), 0px 1.739px 10.24px 0px rgba(0, 0, 0, 0.02), 0px 1.127px 6.636px 0px rgba(0, 0, 0, 0.02), 0px 0.709px 4.178px 0px rgba(0, 0, 0, 0.02), 0px 0.408px 2.4px 0px rgba(0, 0, 0, 0.01), 0px 0.179px 1.056px 0px rgba(0, 0, 0, 0.01)',
        noViewsCardShadow:
          '0px 135px 38px 0px rgba(105, 105, 105, 0.00), 0px 86px 34px 0px rgba(105, 105, 105, 0.01), 0px 49px 29px 0px rgba(105, 105, 105, 0.05), 0px 22px 22px 0px rgba(105, 105, 105, 0.09), 0px 5px 12px 0px rgba(105, 105, 105, 0.10)',
        dashboardSidebar:
          '0px 17px 80px 0px rgba(0, 0, 0, 0.06), 0px 7.102px 33.422px 0px rgba(0, 0, 0, 0.04), 0px 3.797px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 2.129px 10.017px 0px rgba(0, 0, 0, 0.03), 0px 1.131px 5.32px 0px rgba(0, 0, 0, 0.02), 0px 0.47px 2.214px 0px rgba(0, 0, 0, 0.02)',
      },
      colors: {
        //custom color code
        'primary-text': '#252B37',
        'secondary-text': '#404857',
        'tertiary-text': '#666C79',
        'quaternary-text': '#8C919A',

        'brand-parrot': websiteColor,
        'brand-parrot-750': '#CCA739',
        'brand-parrot-500': '#FFD147',

        // stoke color
        'primary-stroke': '#D4D6D9',
        'secondary-stroke': '#BFC2C7',

        // fill color
        'tertiary-fill': '#EFEFF1',
        'secondary-fill': '#F7F7F8',

        // bg color
        'primary-bg': '#FFF',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
