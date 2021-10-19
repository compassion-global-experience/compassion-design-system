# Design Tokens

The Compassion Design System uses
_[design tokens](https://css-tricks.com/what-are-design-tokens/)_
to encourage consistency between components and across layouts. These tokens are
defined as JSON objects in the `components` subdirectory and are dependent on
values in the `elements` library.

The system encourages cross-platform consistency by using
[Style Dictionary](https://amzn.github.io/style-dictionary) to build token
files in the formats required by iOS, Android, and web apps. For instance, most
components in the `react-web` library have styles passed in by a `theme`
object—this theme is merely the built design tokens file, accessed by a
`ThemeProvider`.

This abstraction ensures that when core values such as brand colors or fonts
change in the `elements` library, those changes are automatically reflected in
the design tokens and therefore by any app that consumes them.
