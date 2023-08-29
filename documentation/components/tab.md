## Overview

Tabs are a type of navigation element that allow users to navigate between different views or sections of content within a single page.

## Usage

Tabs are often placed at the top of the page and can be used to switch between different views, such as different products or features, or to navigate between different levels of content, such as different sections of a news article or different steps in a multi-step process.

**Style**

- **Bar:** The bar style displays tabs as a horizontal bar. This style is useful when there are a moderate number of tabs and the labels are short.
- **Floating:** The floating style displays tabs as individual elements that appear to float above the content. This style is useful when there are only a few tabs or when the labels are longer.
- **Underline:** The underline style places the tabs at the top of the content and underlines the tabs. This style is useful when there are only a few tabs or when the labels are longer.

### tab-bar

The tab-bar component is used to display a single tab item in the bar style. It should be used in conjunction with other tab-bar items to create a full set of tabs.

### tab-floating

The tab-floating component is used to display a single tab item in the floating style. It should be used in conjunction with other tab-floating items to create a full set of tabs.

### tab-underline

The tab-underline component is used to display a single tab item in the underline style. It should be used in conjunction with other tab-underline items to create a full set of tabs.

**State**

- Default: The default state of a tab, indicating that it is not currently selected or being interacted with.
- Hover: The state of a tab when the user hovers their cursor over it, indicating that it is able to be interacted with.
- Active: The state of a tab when it is currently selected or being interacted with.
- Disabled: The state of a tab when it is not able to be interacted with, often due to the user not meeting certain criteria or requirements.

**Icon**

Tabs can be accompanied by an icon, which can be placed to the left of the text label.

**Slot**

The slot can be used to add additional tabs beyond the default number, or to add additional content to the right of the text label.

## Best Practices

- Use clear and concise labels for each tab.
- Use consistent styling for the active tab to indicate the user's current location.
- Consider the context and content of the page when determining the number and style of tabs to use.