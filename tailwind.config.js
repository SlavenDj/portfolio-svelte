/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#E0F5F3',
					200: '#B3ECE5',
					300: '#80E3D6',
					400: '#4DDACA',
					500: '#009694',
					600: '#007B7E',
					700: '#005F61',
					800: '#00454A',
					900: '#00333A'
				},
				secondary: {
					100: '#F8EBE9',
					200: '#F0D3D0',
					300: '#E8BAB5',
					400: '#E09A93',
					500: '#9F6150',
					600: '#86503F',
					700: '#6D3E2E',
					800: '#54301F',
					900: '#412514'
				},
				tertiary: {
					100: '#F7F3F2',
					200: '#EDE3E1',
					300: '#E3D3D0',
					400: '#D8C2BE',
					500: '#f2e3e0',
					600: '#D1C0BD',
					700: '#B0ADA9',
					800: '#918A86',
					900: '#776E6B'
				}
			}
		}
	},
	plugins: []
};
