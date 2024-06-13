import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'popularSaleRightOne': "url('/assets/product-img-5.jpg')",
        'popularSaleRightTwo': "url('/assets/product-img-6.jpg')",
        'popularSaleRightThree': "url('/assets/product-img-7.jpg')",
        'newArrivals1': "url('/assets/product-img-1.jpg')",
        'newArrivals2': "url('/assets/product-img-2.jpg')",
        'newArrivals3': "url('/assets/product-img-3.jpg')",
        'newArrivals4': "url('/assets/product-img-4.jpg')",
        'newArrivals5': "url('/assets/product-img-5.jpg')",
        'newArrivals6': "url('/assets/product-img-6.jpg')",
        'newArrivals7': "url('/assets/product-img-7.jpg')",
        'newArrivals8': "url('/assets/product-img-8.jpg')",
        'newArrivals9': "url('/assets/product-img-9.jpg')",
        'newArrivals10': "url('/assets/product-img-10.jpg')",
        'newArrivals11': "url('/assets/product-img-1.jpg')",
        'newArrivals12': "url('/assets/product-img-2.jpg')",
        'discount': "url('/assets/discount-banner-1.jpg')",
        'newLetter': "url(/assets/new-letter.jpg)"
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        guindaLigth: '#FD9398',
        guindaClaro: "#BF1B23",
        guindaOscuro: "#9b0d13",
        grisClaro: "#636363",
        qblack: "rgb(34 34 34/1)",
        qgray: "rgb(121 121 121/1)",
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
      fontWeight: {
        boldCustomer: '400',
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      boxShadow: {
        // x y opacidad tamaño de profundidad color, borde-> x y opacidad tamaño color
        shadowPilares: "-5px 20px 25px 10px rgb(223 36 36 / 0.1), 0 4px 6px -4px rgb(223 36 36 / 0.1)",
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
        ".separator": {
          "width": "130px",
          "display": "flex",
          "font-size": "19px",
          "align-items": "center",
          "justify-content": "center",
        },
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
        ".range-input": {
          "position": "absolute",
          "width": "100%",
          "height": "5px",
          "top": "-5px",
          "background": "none",
          "pointer-events": "none",
          "-webkit-appearance": "none",
          "-moz-appearance": "none",
        }
      };
      addUtilities(newUtilities);
    })
  ],
}
export default config
