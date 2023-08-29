## Overview

Pagination is a common UI pattern used to break up large sets of content into smaller, more manageable chunks. It allows users to navigate through pages of content, with each page typically displaying a fixed number of items.

## Usage

To use the pagination component, simply include it on the page where you want to display paginated content, usually near the bottom of the page. The component typically consists of a container with buttons to navigate to the previous and next pages, as well as a series of numbered buttons representing individual pages.

**Size**

- **Default:** The default size for the pagination component.
- **Small:** A smaller size for the pagination component, suitable for use in more compact designs.
- **Large:** A larger size for the pagination component, suitable for use in designs where the pagination component is a prominent feature.

### page

The page component represents an individual page within the pagination component. It typically consists of a numbered button that, when clicked, displays the content for that page. The number displayed on the button corresponds to the page number.

**State**

- **Default:** Represents the default state of the page component when it is not being interacted with by the user.
- **Hover:** Represents the state of the page component when the user hovers their cursor over it.
- **Active:** Represents the state of the page component when it is currently being interacted with by the user, such as when it is being clicked.
- **Disabled:** Represents the state of the page component when it is not available for interaction, such as when it is not applicable to the current page or there is no more content to display.

**Size**

- **Default:** The default size for the page component.
- **Small:** A smaller size for the page component, suitable for use in more compact designs.
- **Large:** A larger size for the page component, suitable for use in designs where the page component is a prominent feature.

## Best Practices

- Always display the total number of pages and the current page number to help users understand where they are in the content.
- Use clear and concise labels for the previous and next buttons, such as "Prev" and "Next".
- Consider using a "jump to page" feature for cases when there are a large number of pages. This allows users to quickly navigate to a specific page without having to click through each individual page.
- Avoid using too many numbered buttons, as this can be overwhelming for users. Consider using ellipses (...) to represent a range of pages that are not displayed.