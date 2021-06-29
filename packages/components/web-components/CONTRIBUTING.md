# Contributing to the `web-components` Package

The `web-components` package is structured with a component-per-directory convention
inside the `src` directory. Each component directory generally contains:

- A **{ComponentName}.js** that describes and registers the web-component
- A **.stories.js file** that illustrates most of the ways the component can
  be configured
- An **index.js** file that exports the JSX component’s contents

## Workflow

The package uses [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
to facilitate component development and documentation.

For the most part we're developing our components in `react-web` and then we convert them to `web-components`
If for some reason this isn't possible the component can be written from scratch here

Checkout some existing stories to get going

Resources:
- writing web-component stories: https://storybook.js.org/docs/web-components/writing-stories/introduction
- lit-html, writing templates: https://lit-html.polymer-project.org/guide/writing-templates

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
