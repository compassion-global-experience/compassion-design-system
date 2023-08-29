## Overview

A breadcrumb helps users keep track of their location within a website or application. It typically appears near the top of the page and displays a series of links that represent the hierarchy of pages the user has navigated through.

## Usage

The breadcrumb should be near the top of the page, showing links that represent the hierarchy of pages. Use clear and concise labels for each link, and be mindful of the number of links in the trail. Ensure that the breadcrumb trail is easy to scan and visually distinct from the rest of the page content.

### breadcrumb-item

Represents a single item in the breadcrumb trail. It should have a clear and concise label that accurately describes the page it links to. Optionally, it can include additional information, such as the page's type or category.

**State**

- Default: This refers to the default state of a breadcrumb item when it is not currently selected or active. It should be visually distinct from the active state to help users understand which page they are currently on.
- Active: This refers to the state of a breadcrumb item when it is currently selected or represents the page the user is currently on. It should be visually distinct from the default state to help users understand their current location in the hierarchy of pages.

**Other Properties**

- **Icons**: Optional icons can be added to the right or left of the breadcrumb text to provide additional context to the user.
- **Text Visibility**: The breadcrumb text can be shown or hidden depending on the design requirements.

## Best Practices

- Use clear and concise labels for each breadcrumb link to help users understand where they are and how they got there.
- Don't include too many links in the breadcrumb trail, as this can overwhelm users and make it harder for them to navigate.
- Make sure the breadcrumb trail is easy to scan and visually distinct from the rest of the page content.