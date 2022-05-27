module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontSize: {
			'5xl': [
				'calc(4.5vmax + 4.4rem)',
				{
					lineHeight: 'calc(4.1vmax + 4.2rem)'
				}
			],
			'4xl': [
				'calc(3vmax + 3rem)',
				{
					lineHeight: 'calc(3.3vmax + 3.2rem)'
				}
			],
			'3xl': [
				'calc(2.5vmax + 2rem)',
				{
					lineHeight: 'calc(2.5vmax + 2.1rem)'
				}
			],
			'2xl': [
				'calc(1.9vmax + 1.4rem)',
				{
					lineHeight: 'calc(2vmax + 1.58rem)'
				}
			],
			xl: [
				'calc(1.1vmax + 1.2rem)',
				{
					lineHeight: 'calc(1.2vmax + 1.33rem)'
				}
			],
			lg: [
				'calc(0.8vmax + 0.9rem)',
				{
					lineHeight: 'calc(1vmax + 1rem)'
				}
			],
			base: [
				'calc(0.45vmax + 0.79rem)',
				{
					lineHeight: 'calc(0.75vmax + 1rem)'
				}
			],
			sm: [
				'calc(0.4vmax + 0.6rem)',
				{
					lineHeight: 'calc(0.7vmax + 0.8rem)'
				}
			],
			xs: [
				'calc(0.3vmax + 0.69rem)',
				{
					lineHeight: 'calc(0.42vmax + 0.69rem)'
				}
			],
			xxs: [
				'calc(0.1vmax + 0.7rem)',
				{
					lineHeight: 'calc(0.11vmax + 0.72rem)'
				}
			]
		}
	},
	plugins: []
};
