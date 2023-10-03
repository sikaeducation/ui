import type {
	StoryObj, Meta,
} from "@storybook/react";

import {
	useState,
} from "react";
import TagManager from ".";

const meta: Meta<typeof TagManager> = {
	component: TagManager,
};
export default meta;

type Story = StoryObj<typeof TagManager>;

export const Default: Story = {
	render: (args) => {
		const [
			tags,
			updateTags,
		] = useState<string[]>([
			...args.tags,
		]);
		const addTag = (tag: string) => {
			updateTags([
				...tags,
				tag,
			]);
		};
		const removeTag = (id: string) => {
			updateTags(tags.filter((tag) => tag !== id));
		};
		return <TagManager
			{...args}
			tags={tags}
			addTag={addTag}
			removeTag={removeTag}
		/>;
	},
	args: {
		id: "some-id",
		tags: [
			"some-id",
			"some-other-id",
			"yet-another-idea",
			"2-some-id",
			"2-some-other-id",
			"2-yet-another-idea",
			"3-some-id",
			"3-some-other-id",
			"3-yet-another-idea",
			"4-some-id",
			"4-some-other-id",
		],
	},
};
