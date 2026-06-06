/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				accent: "rgb(var(--color-accent) / <alpha-value>)",
				surface: "rgb(var(--color-surface) / <alpha-value>)",
				"on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
				"surface-dark": "rgb(var(--color-surface-dark) / <alpha-value>)",
				"on-surface-dark": "rgb(var(--color-on-surface-dark) / <alpha-value>)",
				muted: "rgb(var(--color-muted) / <alpha-value>)",
			},
			keyframes: {
				marquee1: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				marquee1: "marquee1 40s linear infinite",
				marquee2: "marquee2 40s linear infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
