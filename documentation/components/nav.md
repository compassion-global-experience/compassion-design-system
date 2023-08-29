## Overview

The nav component is used to provide navigation links to different sections of a website or application. It typically includes a list of links to the main sections, and may also include subnav links or dropdown menus. 

## Usage

The nav component is an essential part of any website or application, as it helps users navigate and find the information they need. It should be placed in a prominent location, such as at the top of the page or in a sidebar. 

### nav-horizontal

The nav-horizontal displays a group of nav links horizontally, allowing for more links to be displayed at once and making it easier for users to scan and find what they are looking for.

### nav-vertical

The nav-vertical can be used when space is limited, such as on mobile devices or in a narrow sidebar. It displays a group of nav links vertically instead of horizontally, making it easier to navigate on smaller screens.

### nav-selector

The nav-selector component is used to contain a navigation menu in a dropdown, and is especially useful for mobile devices with limited screen space. It allows users to access multiple sections of a website or application without taking up too much space on the screen. The nav-selector component should include clear labels for each section, and should be placed in a prominent location for easy access.

**State**

- **Default:** This is the default state of the nav-selector and indicates that it is not currently being interacted with by the user.
- **Hover:** This state is triggered when the user hovers their cursor over the nav-selector. It can be used to provide visual feedback and indicate that the link is interactive.
- **Active:** This state is triggered when the user clicks on the nav-selector and it becomes the active link. It can be used to provide visual feedback and indicate the user's current location within the website or application.
- **Disabled:** This state is used to indicate that the nav-selector is not currently available for interaction. It can be used to indicate that the user does not have access to certain sections or features of the website or application.

### nav-item

The nav-item should be used for each individual link within the nav component. It should include a clear and concise label for the link, and the appropriate href attribute to direct the user to the correct page or section of the website or application.

**State**

- Default: This is the default state of the nav-item and indicates that it is not currently being interacted with by the user.
- Hover: This state is triggered when the user hovers their cursor over the nav-item. It can be used to provide visual feedback and indicate that the link is interactive.
- Active: This state is triggered when the user clicks on the nav-item and it becomes the active link. It can be used to provide visual feedback and indicate the user's current location within the website or application.
- Disabled: This state is used to indicate that the nav-item is not currently available for interaction. It can be used to indicate that the user does not have access to certain sections or features of the website or application.

**Subnav**

The sub navigation should be used when there are multiple levels of navigation within a section. It provides an additional layer of organization and can help users find what they are looking for more easily.

**Icon**

An icon can be added to the nav-item to provide additional visual context and help users quickly identify the link. The icon should be simple and easily recognizable, and is placed to the left of the nav-item label.

### nav-subnav-item

The nav-subnav-item should be used to provide additional subnav links within the nav component. It should be used sparingly to avoid overwhelming the user with too many options, and should be clearly labeled to indicate the contents of the subnav.

**State**

- **Default:** This is the default state of the nav-subnav-item and indicates that it is not currently being interacted with by the user.
- **Hover:** This state is triggered when the user hovers their cursor over the nav-subnav-item. It can be used to provide visual feedback and indicate that the link is interactive.
- **Active:** This state is triggered when the user clicks on the nav-subnav-item and it becomes the active link. It can be used to provide visual feedback and indicate the user's current location within the website or application.
- **Disabled:** This state is used to indicate that the nav-subnav-item is not currently available for interaction. It can be used to indicate that the user does not have access to certain sections or features of the website or application.

**Icon**

An icon can be added to the nav-subnav-item to provide additional visual context and help users quickly identify the link.. The icon should be placed to the left of the nav-subnav-item label and should be simple and easily recognizable.

## Best Practices

- Keep the number of links in the nav component to a minimum. Too many links can overwhelm users and make it difficult for them to find what they are looking for.
- Use clear and concise wording for the links. Users should be able to understand where each link will take them without having to guess.
- Use visual cues to indicate the current page or section. This can help users orient themselves within the website or application.