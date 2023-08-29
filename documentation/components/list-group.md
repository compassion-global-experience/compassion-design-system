## Overview

List groups are used to present related items in a clear visual hierarchy.

## Usage

List groups can be used in a variety of design contexts, including dashboards, navigation menus, and product listings. They are particularly useful when presenting a large number of items that need to be organized and easily scannable by the user.

### list-group-item

The list-group-item is a component that represents a single item within a list group. It typically contains a label and an optional image.

**State**

- Default: This state represents the standard appearance of a list-group-item. It is the initial state when the item is not being interacted with.
- Hover: This state is triggered when the user hovers over the list-group-item with their cursor. It is often used to provide visual feedback to the user and can be used to indicate that the item is clickable.
- Active: This state is triggered when the user clicks on the list-group-item. It is often used to provide visual feedback to the user and can be used to indicate that the item has been selected.
- Disabled: This state represents a list-group-item that is not currently interactive or selectable. It is often used to indicate that the item is not available or that the user does not have permission to interact with it.

**Image**

This component allows for an image to be added to the left of the list group item label. This can be useful for providing visual cues or additional information about the item.

**Slot**

The slot component can be used to add additional content to the right of the label, allowing for more flexibility and customization.

## Best Practices

- Use consistent formatting for list group items, including font size, spacing, and capitalization.
- Consider using a hover effect or other visual cue to indicate when an item is selected.
- Use clear and concise labels for list group items to make them easily scannable and understandable for the user.