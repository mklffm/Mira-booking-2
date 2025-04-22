/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6ff",
          100: "#d8eaff",
          200: "#b7d5ff",
          300: "#8bbaff",
          400: "#5c96ff",
          500: "#3b82f6",
          600: "#2570eb",
          700: "#1d5bd8",
          800: "#1e47af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          50: "#ecfdff",
          100: "#d1f8fe",
          200: "#a7eafd",
          300: "#6ed4fb",
          400: "#34b8f9",
          500: "#0e9be7",
          600: "#0582c7",
          700: "#0469a2",
          800: "#065784",
          900: "#064970",
          950: "#042d47",
        },
        gradient: {
          start: "#104c91", // dark blue
          mid: "#3b82f6", // medium blue
          end: "#60a5fa", // light blue
        },
        blue: {
          50: "#eef6ff",
          100: "#d8eaff",
          200: "#b7d5ff",
          300: "#8bbaff",
          400: "#5c96ff",
          500: "#3b82f6",
          600: "#2570eb",
          700: "#1d5bd8",
          800: "#1e47af",
          900: "#1e3a8a",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(to right, var(--blue-gradient-start), var(--blue-gradient-end))',
        'blue-gradient-vertical': 'linear-gradient(to bottom, var(--blue-gradient-start), var(--blue-gradient-end))',
        'blue-gradient-radial': 'radial-gradient(circle, var(--blue-gradient-mid), var(--blue-gradient-start))',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'gleam': 'gleam 3s linear infinite',
        'float-shadow': 'float-shadow 3s ease-in-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%, 100%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gleam: {
          '0%': { transform: 'rotate(30deg) translateX(-100%)' },
          '100%': { transform: 'rotate(30deg) translateX(100%)' },
        },
        'float-shadow': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          },
          '50%': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 25px rgba(0,0,0,0.05)',
          },
        },
      },
      boxShadow: {
        'neomorphic': '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
        'inner-neomorphic': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        'blue-glow': '0 0 15px rgba(59, 130, 246, 0.5)',
        'blue-glow-lg': '0 0 30px rgba(59, 130, 246, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 