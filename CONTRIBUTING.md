# Contributing to Compassion’s Design System

## Reporting Issues

If you find a bug or have a feature request, please
[create an issue](https://github.com/compassion-global-experience/compassion-design-system/issues/new/choose) 
and follow the issue template.

## Contributing Code

1. This project uses **node.js** and **npm**. 
**npm** comes preinstalled with node. You can install nodejs following the steps here: https://nodejs.org/en/

2. We keep the development experience consistent by making sure everyone is using the same
(or compatible) nodejs/npm version with [nvm](https://github.com/nvm-sh/nvm)
run `nvm use` in the project root and this would automatically switch you to the
correct version specified in [.nvmrc](.nvmrc)

3. The project is structured as a monorepo, run `npm run bootstrap` to install all necessary dependencies

## Workflow

1. **Check for open issues.** Before you embark on a large pull request, it's
   usually a good idea to first check to see if an issue exists for the problem
   you're trying to solve. If one does, please add a comment to the existing issue
   instead of creating a new one.
2. **Create a branch.** Create a branch for your work. The branch name should be
   descriptive and can include the issue number. For example, `feature/1234-add-foo`.
3. **Make changes.** Make your changes. See the README in each package for more
   information about that package.
4. **Storybook.** Use [Storybook](https://storybook.js.org) to test and document the components.
   For more information on how to use storybook, see the [Storybook](#storybook) section below.
5. **Package specifics.** Checkout individual package READMEs for more information
   about that package.
6. **Commit.** Commit your changes. Follow the 
   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) specification.
   Checkout the [Commit Messages & Versioning](#commit-messages--versioning) section below.
7. **Push.** Push your changes to your branch.
8. **Create a pull request.** Create a pull request from your branch to the `development` branch.
9. **Review.** Review your pull request. Make sure the CI checks pass and that
   someone else has reviewed your changes.
10. **Merge.** Merge your pull request. If you don't have permission to merge, ask
    someone else to merge it for you.
11. **Delete your branch.** You can delete your branch after the PR is merged.
12. **Publish.** If you're a maintainer, publish the package to npm. See the
   [Publishing](#publishing) section below.

### Commit Messages & Versioning

Every package in the compassion-gds monorepo adheres to
[semantic versioning](https://semver.org/). In order to simplify the versioning
and release process, please be sure your commit messages adhere to the
[“Conventional Commits” pattern](https://www.conventionalcommits.org/en/v1.0.0/#summary).
You may wish to install the [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
to make this near-bulletproof.

### Storybook

We use [Storybook](https://storybook.js.org) to document and test our components.
Storybook renders components in their various states, and serves as
documentation of those components by surfacing code comments, Typescript prop typings and `defaultProps` values.

To launch Storybook, make sure you’re in the package directory and run the command `npm run storybook`.
After the project is built, Storybook will launch in your default browser. New components or modifications
will be displayed in real time! 🎉

## Publishing

We don't have a strict Publishing schedule.  
The typical workflow is to publish a new version after a certain set of features are added or bugs are fixed.

If you are a maintainer you can publish the package to npm. To do this, run the
following command:

```sh
npm run publish
```

This will run the following steps:

1. **Build.** Build the package.
2. **Test.** Run the tests.
3. **Lint.** Run the linter.
4. **Version.** Bump the version.
5. **Tag.** Tag the release in git.
6. **Update the changelog.** Update the changelog. _(See the [Changelog](./CHANGELOG.md) here)_.
7. **Publish.** Publish the package to npm.
   section below.

## Additional/Optional stuff related to publishing

1. **Update the documentation.** Update the documentation.
2. **Update the website.** Update designwithcompassion.com with relevant information.
3. **Update the examples.** Update the examples
4. **Update the release notes.** If you're a maintainer, update the release notes.
5. **Update the roadmap.** If you're a maintainer, update the roadmap.
