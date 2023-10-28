# Sika UI

[![CI](https://github.com/sikaeducation/ui/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/ui/actions/workflows/main.yml)

Sika's [UI library](https://ui.sikaeducation.com)

## Usage

```bash
npm i @sikaeducation/ui
```

Requires React and React DOM.

JS/TS:

```javascript
// Import these once per app
import "@sikaeducation/ui/components.css"; // Static CSS styles for included components
import "@sikaeducation/ui/reset"; // App reset SCSS
import "@sikaeducation/ui/styles"; // SCSS style library

// Import these in any component
import { Markdown, Button, TextInput } from "@sikaeducation/ui"; // Component library
```

SCSS:

```scss
/* Use this in any component */
@use "@sikaeducation/ui/styles" as *;

button {
  padding: $sizes-s4;
  @include shadows-small;
}
```

### SCSS Style Modules

- `@sikaeducation/reset`: SCSS reset
- `@sikaeducation/styles`: Base SCSS styles, including these namespaces:
  - `sizes-*`
  - `colors-*`
  - `typography-*`
  - `shadows-*`
  - `borders-*`
  - `forms-*`

Sika fonts are in `/dist/fonts` of the compiled package and should be copied into a public `fonts` directory on the client.

### Component Library

- `@sikaeducation`: The Sika component library
- `@sikaeducation/components.css`: CSS for all components
- `@sikaeducation/types`: TypeScript types for components

## Documentation

- [https://ui.sikaeducation.com](https://ui.sikaeducation.com) - Production
- [http://localhost:6006](http://localhost:6006) - Development

## Development

Requires `npm i -D eslint prettier`.

Scripts:

- `dev` - Launch a local server on 6006
- `lint` - Lint and fix
- `build` - Build the component library and copy the static files
- `build:watch` - Continuously build (for `npm link`ed projects)
- `build:storybook` - Build static storybook site
- `test:ci` - Run all tests statically
- `test`, `test:watch` - Run tests through Storybook

Run `npm link` while inside this repo to create a global symlink for that folder. Run `npm link @sikaeducation/stylelint-config` in a client repo to link to locally installed version (this will be overwritten on the next `npm install`). Then run `npm run build:watch` in this repo to auto-build server for real-time style updates in clients.

Aliases:

- `@`: `./src`
- `$`: `./style-library`

### Deployment

Set `NPM_TOKEN` on GitHub Actions to publish. Generate it on [Sika's npm page](https://www.npmjs.com/settings/sikaeducation/tokens) then add it to the [secrets page](https://github.com/sikaeducation/eslint-config/settings/secrets/actions).

Set `NETLIFY_SITE_ID` and `NETLIFY_AUTH_TOKEN` on GitHub Actions to deploy to Netlify. Get these on the [Netlify apps page](https://app.netlify.com/user/applications) and add them to the [secrets page](https://github.com/sikaeducation/eslint-config/settings/secrets/actions).

Publish updates by incrementing the version with `npm version patch|minor|major` and pushing.

Static documentation deploys to [Netflify](https://app.netlify.com/sites/sikaeducation-ui/overview), library deploys to npm as [@sikaeducation/ui](https://www.npmjs.com/package/@sikaeducation/ui).
