import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       colors: {
        'red-600': '#e50914',
        'grey-600': 'rgb(20, 20, 20)',
        'breaker-600': '#020202',
        'link-600': '#8c8a89',
        'bit-black':'#000000E6',
        'less-black': '#000000A7',
        'playback': '#00000099',
      },
    },
  },
  plugins: [],
}
export default config
