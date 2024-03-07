/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50.33% 49.95% at 56.62% 50.05%, #000000 0%, rgba(32, 32, 32, 0) 0.01%, rgba(0, 0, 0, 0.928993) 130.28%, #000000 100%)",
        "gradient-custom":
          "linear-gradient(1.5deg, #396F71 1.08%, #000000 98.55%)",
        "gradient-left-to-right": "linear-gradient(to right, #233646, #030606)",
      },
      colors: {
        black: "#000",
        snow: "#fcf2f1",
        gainsboro: {
          100: "#e8e8e8",
          200: "#e0e0e0",
          300: "#d9d9d9",
          400: "rgba(217, 217, 217, 0)",
        },
        gray: {
          100: "#1c1c1f",
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.15)",
          400: "rgba(12, 12, 12, 0.5)",
          500: "rgba(255, 255, 255, 0.3)",
          600: "rgba(20, 20, 20, 0)",
        },
        whitesmoke: "#f5f5f5",
        white: "#fff",
        lightgray: "#d5cac9",
        lightsalmon: "#f58b6b",
        burlywood: "#c6a15a",
      },
      // fontFamily: {
      //   californian: ["californian", "sans-serif"],
      //   bluuNext: ["Bluu Next","sans-serif"],
      //   harryP: ['Harry P',"sans-serif"],
      //   inter: "Inter",
      //   lato: "Lato",
      //   "google-sans": "'Google Sans'",
      //   "satoshi-variable": "'Satoshi Variable'",
      //   "space-grotesk": "'Space Grotesk'",
      // },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(241, 189, 113, 1)",
      },
      gradientColorStops: {
        "left-to-right": ["#233646", "#030606"],
      },
      linearGradientColors: {
        'custom-gradient': ['180deg', '#000000 0%', 'rgba(75, 75, 75, 0.4) 44.4%', '#000000 100%'],
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      "56xl": "75px",
      "26xl": "45px",
      "41xl": "60px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "131xl": "150px",
      "18xl": "37px",
      base: "16px",
      lgi: "19px",
      "7xl": "26px",
      "11xl": "30px",
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      "81xl": "100px",
      "31xl": "50px",
      "25xl-1": "44.1px",
      "16xl": "35px",
      "51xl-6": "70.6px",
      "23xl": "42px",
      "37xl": "56px",
      "69xl-3": "88.3px",
      "25xl": "44px",
      "4xl-3": "23.3px",
      "43xl-7": "62.7px",
      "19xl": "38px",
      "base-1": "16.1px",
      "25xl-8": "44.8px",
      "8xl": "27px",
      "17xl": "36px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
