# Contributing to the `react-web` Package

The `react-web` package is structured with a component-per-directory convention
inside the `src` directory. Each component directory generally contains 4 items:

- A **JSX file** that describes the component’s structure and behavior
- A **.styles.js file** that describes the component’s appearance
- A **.stories.js file** that illustrates most of the ways the component can
  be configured
- An **index.js** file that exports the JSX component’s contents

## Workflow

The package uses [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
to facilitate component development and documentation. Storybook uses the files
mentioned above to render components in their various states, and serves as
documentation of those components by surfacing code comments, `propTypes`, and
`defaultProps` values.

To launch Storybook, make sure you’re in the `/packages/components/react-web`
directory and run the command `yarn storybook`. After the project is built,
Storybook will launch in your default browser. New components or modfications
will be displayed in real time! 🎉

The configurations outlined in each component’s .stories.js file can be seen in
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
branch of the project and it will be merged in as quickly as possible!
