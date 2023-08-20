import sikaConfig from "@sikaeducation/eslint-config-ts-react"

export default [
	{
		ignores: ["storybook-static", "dist", "*.svg"],
	},
	...sikaConfig,
]
