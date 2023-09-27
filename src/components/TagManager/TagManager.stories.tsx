import type { StoryObj, Meta } from "@storybook/react";

import { useState } from "react";
import TagManager from ".";

const meta: Meta<typeof TagManager> = {
	component: TagManager,
};
export default meta;

type Story = StoryObj<typeof TagManager>;

export const Small: Story = {
	render: (args) => {
		const [
			tags,
			updateTags,
		] = useState<string[]>([]);
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
	},
};
