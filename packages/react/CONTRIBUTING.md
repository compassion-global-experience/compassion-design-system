# Contributing to the `react-web` Package

The `react` package is structured with a component-per-directory convention
inside the `src` directory. Each component directory generally contains 3 items:

- A **TSX file** that describes the component’s structure and behavior
- A **.stories.ts file** that illustrates most of the ways the component can
  be configured
- An **index.ts** file that exports the TSX component’s contents

## Workflow

The package uses [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
to facilitate component development and documentation. Storybook uses the files
mentioned above to render components in their various states, and serves as
documentation of those components by surfacing code comments, `propTypes`, and
`defaultProps` values.

To launch Storybook, make sure you’re in the [/packages/react](/packages/react)
directory and run the command `npm run storybook`. After the project is built,
Storybook will launch in your default browser. New components or modifications
will be displayed in real time! 🎉

The configurations outlined in each component’s .stories.ts file can be seen in
Storybook’s **Docs** tab.

## Commit Messages & Versioning

Every package in the compassion-gds monorepo adheres to
[semantic versioning](https://semver.org/). In order to simplify the versioning
and release process, please be sure your commit messages adhere to the
[“Conventional Commits” pattern](https://www.conventionalcommits.org/en/v1.0.0/#summary).
You may wish to install the [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
to make this near-bulletproof.

## Making a Pull Request

Once your changes are ready, open a pull request against the `development`
branch of the project, and it will be merged in as quickly as possible!
