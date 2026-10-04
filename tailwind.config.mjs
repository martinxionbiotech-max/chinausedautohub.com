/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Single stable brand color: deep navy. No gradients, no rainbow accents.
        brand: {
          50: '#eef2f7',
          100: '#d8e1ec',
          200: '#b4c4d8',
          300: '#8ba1bd',
          400: '#5f7a9c',
          500: '#3f5a7d',
          600: '#2c4466',
          700: '#213552',
          800: '#182a44',
          900: '#101f35',
          950: '#0a1626',
        },
        ink: {
          DEFAULT: '#1a2330',
          soft: '#4a5568',
          muted: '#718096',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f6f8fa',
          line: '#e5eaf0',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,31,53,0.06), 0 1px 3px rgba(16,31,53,0.08)',
      },
    },
  },
  plugins: [],
};
