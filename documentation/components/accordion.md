## Overview

An accordion is a user interface element that allows users to toggle the display of content. It consists of a list of headers that can be clicked to expand or collapse content. Accordions are commonly used to display a large amount of information in a limited amount of space.

## Usage

In general, accordions are best used when the content they contain is not critical to the user's experience. If the information is essential, it is better to display it in a visible and easily accessible manner. They can be used to display frequently asked questions, product features, or any other type of content that can be grouped into categories.

### accordion-item

The accordion-item component is a single item within the accordion. It consists of a header and a content section. The header is typically a clickable element that expands or collapses the content section when clicked. The content section can contain any type of content, including text, images, or other interactive elements.

**State**

- Default: The default state of an accordion item, where the content is hidden and only the header is visible.
- Hover: The state of an accordion item when the user hovers over the header, typically indicated by a change in color or other visual cue.
- Active: The state of an accordion item when the content is expanded and visible.
- Disabled: The state of an accordion item when it is not clickable or interactive, typically indicated by a change in color or opacity.

### Slot

The slot component can be used to add their own custom content to the accordion, which can be useful for displaying unique or specialized information such as text, images or other interactive elements.

## Best Practices

- Use clear and concise headers that accurately describe the content in each section.
- Consider using icons or other visual cues to indicate the state of each section (e.g. open or closed).
- Use hover and active effects to provide visual feedback to users.
- Clearly indicate when a section is disabled.
- Avoid nesting accordions within accordions, as this can lead to confusion and usability issues.