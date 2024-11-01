/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				"carrusel":"2288px"
			}
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		  },
		keyframes:{
			cscroll:{
				"0%":{transform: 'translateX(0)'},
				"100%":{transform: 'translateX(calc(104px * 18))'},

			}
		},
		animation:{
			cscroll:"cscroll 30s linear infinite alternate"
		}
	},
	plugins: [],
}
