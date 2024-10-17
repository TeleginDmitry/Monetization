import type { Config } from "tailwindcss";
import { transparent, white } from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },

      screens: {
        sm: "800px",
        md: "900px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1200px",
        "3xl": "1300px",
        "4xl": "1400px",
      },

      center: true,
    },

    fontSize: {
      "2xs": "12px",
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "36px",
      "5xl": "40px",
      "6xl": "48px",
      "7xl": "52px",
      "8xl": "64px",
      "9xl": "80px",
    },

    borderRadius: {
      none: "0px",
      xs: "4px",
      sm: "8px",
      DEFAULT: "10px",
      lg: "12px",
      xl: "16px",
      full: "9999px",
    },

    colors: {
      transparent,
      white,
      black: "#1D1D1B",

      orange: {
        100: "#FF5900",
        0: "#E0570E",
      },

      gray: {
        25: "#A4ADAC",
        50: "#D6DBDB",
        75: "#E8EDEE",
        100: "#F2F6F6",
      },

      red: "#FF4026",
    },

    screens: {
      mobile: "320px",

      tablet: "768px",

      desktop: "1440px",
    },

    extend: {
      borderWidth: {
        sm: "1.5px",
      },

      gap: {
        sm: "5px",
      },

      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        onest: ["var(--font-onest)", "sans-serif"],
      },

      backgroundImage: {
        "top-section-320":
          "url('/images/blue-glass-shapes-composition-3d-320.png')",
        "top-section-768":
          "url('/images/blue-glass-shapes-composition-3d-768.png')",
        "top-section-1440":
          "url('/images/blue-glass-shapes-composition-3d-1440.png')",
      },
    },
  },
  plugins: [],
};
export default config;
