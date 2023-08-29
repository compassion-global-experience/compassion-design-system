## Overview

The dropdown component allows users to select a single item from a list of options. When the user clicks on the dropdown, a list of options is displayed.

## Usage

The dropdown component is commonly used in menus, and other user interfaces where the user needs to select a single option from a list of options.

### dropdown-item

Represents a single item within a dropdown list. The content of the item can range from plain text to a more complex UI component.

**State** 

- Default: The default state is the initial appearance of the dropdown-item.
- Hover: The hover state is activated when the user hovers over the dropdown-item with their cursor.
- Active: The active state is activated when the user clicks on the dropdown-item, indicating that it has been selected.
- Disabled: The disabled state is activated when the dropdown-item is not selectable, usually due to some condition such as insufficient permissions or data.

**Slot**

The slot component can be used to add their own custom content to the dropdown-item, which can be useful for displaying unique or specialized information such as text, badges or other interactive elements.

**Icon**

An icon can be added to the left of the text in a dropdown-item to provide additional context or visual cues to the user.

## **Best Practices**

- Use clear and concise language for dropdown options to ensure easy comprehension.
- Keep the number of options to a minimum to avoid overwhelming the user.
- Place the dropdown in a visible location, and make sure it is easily accessible to the user.