/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionDuration: {
				'2000': '2000ms',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		},
		'animation': {
			'gradient-x': 'gradient-x 12s ease infinite',
			'gradient-y': 'gradient-y 12s ease infinite',
			'gradient-xy': 'gradient-xy 12s ease infinite',
		},
		'keyframes': {
			'gradient-y': {
				'0%, 100%': {
					'background-size': '400% 400%',
					'background-position': 'center top'
				},
				'50%': {
					'background-size': '200% 200%',
					'background-position': 'center center'
				}
			},
			'gradient-x': {
				'0%, 100%': {
					'background-size': '200% 200%',
					'background-position': 'left center'
				},
				'50%': {
					'background-size': '200% 200%',
					'background-position': 'right center'
				}
			},
			'gradient-xy': {
				'0%, 100%': {
					'background-size': '400% 400%',
					'background-position': 'left center'
				},
				'50%': {
					'background-size': '200% 200%',
					'background-position': 'right center'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
