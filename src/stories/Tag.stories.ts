import Tag from '$lib/tag.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta = {
	title: 'Tag',
	component: Tag,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
	args: {
		icon: ''
		//pathname: '/'
	}
};

/* export const AboutPage: Story = {
	args: {
		//pathname: '/about'
	}
};
 */
