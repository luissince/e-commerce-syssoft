import plugin from 'tailwindcss/plugin';
import { Config, CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'qgray-border': 'rgb(239 239 239/1)',
        'search-btn': 'rgb(255 187 56/1)',
        'qyellow': 'rgb(255 187 56/1)',
      },
      backgroundImage: {
        'portada': "url('/assets/section-category-1.jpg')",
        'postBrandLeft': "url('/assets/campaign-cover-countdown.jpg')",
        'postBrandRight': "url('/assets/download-app-cover.png')",
        'popularSaleLeft': "url('/assets/section-category-2.jpg')",
        'discount': "url('/assets/discount-banner-1.jpg')",
        'newLetter': "url(/assets/new-letter.jpg)"
      },
      colors: {
        primary: "#00040f",
        qblack: "rgb(34 34 34/1)",
        qgray: "rgb(124 124 124/1)",
        qblacktext: "rgb(29 29 29/1)",
        qyellow: "rgb(255 187 56/1)",
        qred: "rgb(239 38 44/1)",
        primarygray: "rgb(248 248 248/1)",
        qgraytwo: 'rgb(142 142 142/1)'
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
      },
      borderColor: {
        'qgray-border': "rgb(239 239 239/1)"
      },  
      boxShadow: {
        shadowProduct: "rgba(0, 0, 0, 0.05) 0px 15px 64px"
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      },
      transitionProperty: {
        'height': 'all .5s ease-in-out',
      }
    },
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      const newUtilities: CSSRuleObject = {
        ".slider": {
          "height": "5px",
          "position": "relative",
          "background": "#d4d4d4",
          "border-radius": "5px",
        },
        ".slider .progress": {
          "height": "100%",
          "left": "25%",
          "right": "25%",
          "position": "absolute",
          "border-radius": ".3rem",
          "background": "#ffbb38",
    
        },
      };
      addUtilities(newUtilities);
    })
  ],
  darkMode: 'class'
}
export default config