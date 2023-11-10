import Hero from '$lib/Hero.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
	title: 'Hero',
	component: Hero,
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
	args: {}
};
