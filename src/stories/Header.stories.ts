import Header from '$lib/Header.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
	title: 'Header',
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
	args: {
		pathname: '/'
	}
};

export const AboutPage: Story = {
	args: {
		pathname: '/about'
	}
};
