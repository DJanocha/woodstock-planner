import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    textShadow: {
      sm: "1px 1px 2px var(--tw-shadow-color)",
      DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
      lg: "4px 4px 8px var(--tw-shadow-color)",
      xl: "4px 4px 16px var(--tw-shadow-color)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateRows: {
        "24": "repeat(24, minmax(0, 1fr))",
        "1440": "repeat(1440, minmax(0, 1fr))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        jade: {
          "50": "hsl(180, 100%, 97%)", // #effef7
          "100": "hsl(180, 100%, 91%)", // #dafeef
          "200": "hsl(180, 100%, 85%)", // #b8fadd
          "300": "hsl(172, 100%, 75%)", // #81f4c3
          "400": "hsl(162, 100%, 60%)", // #43e5a0
          "500": "hsl(150, 100%, 50%)", // #1acd81
          "600": "hsl(150, 100%, 40%)", // #0fa968
          "700": "hsl(150, 100%, 34%)", // #108554
          "800": "hsl(150, 100%, 30%)", // #126945
          "900": "hsl(150, 100%, 25%)", // #11563a
          "950": "hsl(150, 100%, 10%)", // #03301f
        },

        wewak: {
          "50": "hsl(0, 100%, 96%)", // #fdf3f4
          "100": "hsl(0, 100%, 92%)", // #fbe8eb
          "200": "hsl(0, 100%, 86%)", // #f6d5da
          "300": "hsl(0, 67%, 68%)", // #ea9daa
          "400": "hsl(0, 67%, 59%)", // #e58799
          "500": "hsl(348, 63%, 54%)", // #d75c77
          "600": "hsl(348, 57%, 43%)", // #c13d60
          "700": "hsl(348, 55%, 36%)", // #a22e4f
          "800": "hsl(348, 54%, 36%)", // #882947
          "900": "hsl(348, 54%, 32%)", // #752642
          "950": "hsl(348, 62%, 24%)", // #411020
        },
        "waikawa-gray": {
          "50": "hsl(200, 23%, 95%)", // #f2f7fb
          "100": "hsl(200, 25%, 92%)", // #e7f0f8
          "200": "hsl(210, 25%, 87%)", // #d3e2f2
          "300": "hsl(210, 25%, 80%)", // #b9cfe8
          "400": "hsl(210, 25%, 70%)", // #9cb6dd
          "500": "hsl(210, 30%, 63%)", // #839dd1
          "600": "hsl(210, 35%, 55%)", // #6a7fc1
          "700": "hsl(210, 35%, 48%)", // #6374ae
          "800": "hsl(210, 35%, 40%)", // #4a5989
          "900": "hsl(210, 28%, 37%)", // #414e6e
          "950": "hsl(210, 24%, 25%)", // #262c40
        },
        perfume: {
          "50": "hsl(270, 100%, 96%)", // #fbf5ff
          "100": "hsl(270, 100%, 93%)", // #f5e9fe
          "200": "hsl(270, 100%, 86%)", // #ecd6fe
          "300": "hsl(270, 100%, 79%)", // #e2bffc
          "400": "hsl(270, 100%, 65%)", // #ca88f8
          "500": "hsl(270, 76%, 54%)", // #b55af2
          "600": "hsl(270, 79%, 43%)", // #a239e4
          "700": "hsl(270, 72%, 37%)", // #8c28c8
          "800": "hsl(270, 73%, 31%)", // #7625a4
          "900": "hsl(270, 76%, 30%)", // #611f84
          "950": "hsl(270, 76%, 21%)", // #430a61
        },
        "witch-haze": {
          "50": "hsl(60, 100%, 95%)", // #fdfce9
          "100": "hsl(60, 100%, 90%)", // #fcfac5
          "200": "hsl(60, 100%, 80%)", // #faf389
          "300": "hsl(60, 85%, 65%)", // #f7e64d
          "400": "hsl(60, 100%, 37%)", // #f3d51c
          "500": "hsl(60, 100%, 36%)", // #e3bb0f
          "600": "hsl(60, 100%, 30%)", // #c4930a
          "700": "hsl(60, 100%, 25%)", // #9c690c
          "800": "hsl(60, 100%, 20%)", // #815412
          "900": "hsl(30, 60%, 30%)", // #6e4415
          "950": "hsl(30, 60%, 20%)", // #402308
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
} satisfies Config;

export default config;
