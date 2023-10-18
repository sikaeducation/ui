# Sika UI

Sika's [UI library](https://ui.sikaeducation.com)

[![CI](https://github.com/sikaeducation/ui/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/ui/actions/workflows/main.yml)

## Peer Dependencies

- React
- React DOM

## Dev Dependencies

- ESLint
- Prettier

## Scripts

- `dev` - Launch a local server on 6006
- `lint` - Lint and fix
- `build` - Build the component library and copy the static files
- `build:watch` - Continuously build (for `npm link`ed projects)
- `build:storybook` - Build static storybook site
- `test` - Runs all tests
- `test:ci` - Run all tests statically
- `test:watch` - Run tests continuously

## Modules

- `@sikaeducation`: The Sika component library
- `@sikaeducation/components.css`: CSS for all components
- `@sikaeducation/reset`: CSS reset
- `@sikaeducation/styles`: Base SCSS styles, including these namespaces:
  - `sizes-*`
  - `colors-*`
  - `typography-*`
  - `shadows-*`
  - `borders-*`
  - `forms-*`
- `@sikaeducation/types`: TypeScript types for components
- `@sikaeducation/fonts`: Font files
