# Contributing to Compassion’s Design System

1. **Install Yarn.** You may already have the Yarn package manager installed! If not, here's how to
   get it.

   **macOS:** If you're using Homebrew, you can simply run `brew install yarn`. You
   can also install Yarn manually via the command `curl -o- -L https://yarnpkg.com/install.sh | bash`

   **Windows:** Yarn can be installed on [WSL](https://ubuntu.com/wsl, 'Windows Subsystem for Linux')
   by running the command `sudo apt install yarn`. Yarn can also be installed by
   an .msi package or with the Chocolatey package manager.
   [Visit the Yarn site](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
   for specific instructions.

2. **Install the monorepo’s dependencies** by running `yarn install`.

   Items in the `packages` subdirectory of the monorepo have been set up as
   Yarn workspaces. One beneficial side effect of Yarn workspaces is that
   running `yarn install` at the monorepo level (as described in the previous
   section) will also install the dependencies of each package in the monorepo.

3. **Next Steps.** That’s it! See each package’s CONTRIBUTING document for more
   instructions that are package-specific:

   - [components/react-web](./packages/components/react-web/CONTRIBUTING.md)
   - [elements](./packages/elements/CONTRIBUTING.md)
