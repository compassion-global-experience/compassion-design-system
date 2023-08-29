## Overview

A form is a collection of user input fields, such as text boxes, checkboxes, and radio buttons that allow users to submit information to a system or application.

## Usage

Forms can be used in a variety of design contexts, such as for user registration, data collection, surveys, and checkout processes. They are a critical component of many user interfaces, as they allow users to interact with and provide input to the system or application.

### text

A text input field allows the user to enter free-form text. This type of input field is commonly used for tasks such as entering a name, email address, or message. 

**State**

- **Default**: The default state of a text input field, where no user input has been entered yet.
- **Filled**: The state of a text input field when the user has entered input.
- **Active**: The state of a text input field when the user is currently interacting with it, such as clicking on it or typing in it.
- **Disabled**: The state of a text input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Error**: The state of a text input field when the user has entered invalid input or there is an error with the field.
- **Success**: The state of a text input field when the user has entered valid input and the input has been successfully processed.

**Input Group**

An input group is a collection of elements that can be added to the left or right side of a text input field. This can include icons and text. Input groups are often used to provide additional context or functionality to a text input field, such as a search icon or a dropdown menu.

**Label**

A label is text that describes the purpose or function of an input field. Labels are typically displayed above or to the left of the input field. By default, labels are shown for all input fields. However, in some cases, labels may be hidden if they are redundant or if the context is clear.

**Hint** 

Hints are additional text that provide guidance or clarification for an input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

**Icons**

Icons can be added to the left or right side of the input value. These can be used to provide additional context or functionality to the input field, such as a search icon or a clear icon.

### select

A select input field allows users to choose from a pre-defined list of options. This type of input field is commonly used for tasks such as selecting a country, state, or category.

**State**

- **Default**: The default state of a select input field, where no option has been selected yet.
- **Filled:** The state of a select input field when an option has been selected.
- **Active**: The state of a select input field when the user is currently interacting with it, such as hovering over it or clicking on it.
- **Disabled**: The state of a select input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Error**: The state of a select input field when the user has made an invalid selection or there is an error with the field.
- **Success**: The state of a select input field when the user has made a valid selection and the selection has been successfully processed.

**Option**

Options are the pre-defined list of choices available for the user to select from. Each option typically consists of a label and a value. The label is what the user sees on the screen and the value is what is submitted to the system or application when the user makes a selection.

**Input Group**

An input group is a collection of elements that can be added to the left or right side of a select input field. This can include icons and text. Input groups are often used to provide additional context or functionality to a select input field, such as a search icon or a dropdown menu.

**Label**

A label is text that describes the purpose or function of a select input field. Labels are typically displayed above or to the left of the input field. By default, labels are shown for all input fields. However, in some cases, labels may be hidden if they are redundant or if the context is clear.

**Hint**

Hints are additional text that provide guidance or clarification for a select input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

**Icons**

Icons can be added to the left or right side of the select input field. These can be used to provide additional context or functionality to the input field, such as a dropdown icon or a clear icon.

### textarea

A textarea input field allows users to enter free-form text that can be multiple lines long. This type of input field is commonly used for tasks such as entering a message or a comment.

**State**

- **Default**: The default state of a textarea input field, where no user input has been entered yet.
- **Filled**: The state of a textarea input field when the user has entered input.
- **Active**: The state of a textarea input field when the user is currently interacting with it, such as clicking on it or typing in it.
- **Disabled**: The state of a textarea input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Error**: The state of a textarea input field when the user has entered invalid input or there is an error with the field.
- **Success**: The state of a textarea input field when the user has entered valid input and the input has been successfully processed.

**Label**

A label is text that describes the purpose or function of a textarea input field. Labels are typically displayed above or to the left of the input field. By default, labels are shown for all input fields. However, in some cases, labels may be hidden if they are redundant or if the context is clear.

**Character Count**

A counter is text that displays the number of characters that the user has entered in the textarea input field. Counters are typically the right of the input field and are often used to provide feedback to the user about the length of their input.

**Hint**

Hints are additional text that provide guidance or clarification for a textarea input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

### radio

A radio input field allows users to select one option from a pre-defined list of options. This type of input field is commonly used for tasks such as selecting a gender or membership status.

**State**

- **Default**: The default state of a radio input field, where no option has been selected yet.
- **Hover:** The state of a radio input field when the user hovers over an option with their cursor, indicating that the option is interactive and can be selected.
- **Selected**: The state of a radio input field when the user has selected an option.
- **Disabled**: The state of a radio input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Disabled-Selected**: The state of a radio input field when the user has selected an option, but the option is not applicable to the current context or the user does not have permission to select it.
- **Error**: The state of a radio input field when the user has made an invalid selection or there is an error with the field.

**Hint**

Hints are additional text that provide guidance or clarification for a radio input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

### checkbox

A checkbox field allows users to select one or more options from a pre-defined list of options. This type of input field is commonly used for tasks such as selecting multiple interests or preferences.

**State**

- **Default**: The default state of a check input field, where no option has been selected yet.
- **Hover:** The state of a check input field when the user hovers over an option with their cursor, indicating that the option is interactive and can be selected.
- **Selected**: The state of a check input field when the user has selected an option.
- **Disabled**: The state of a check input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Disabled-Selected**: The state of a check input field when the user has selected an option, but the option is not applicable to the current context or the user does not have permission to select it.
- **Error**: The state of a check input field when the user has made an invalid selection or there is an error with the field.

**Hint**

Hints are additional text that provide guidance or clarification for a check input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

### pin

A PIN input field allows users to enter a combination of numbers or letters. This type of input field is commonly used for tasks such as entering a password or a security code.

**State**

- **Default**: The default state of a PIN input field, where no user input has been entered yet.
- **Filled**: The state of a PIN input field when the user has entered input.
- **Active**: The state of a PIN input field when the user is currently interacting with it, such as clicking on it or typing in it.
- **Disabled**: The state of a PIN input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.
- **Error**: The state of a PIN input field when the user has entered invalid input or there is an error with the field.

**Label**

A label is text that describes the purpose or function of a pin-group. Labels are typically displayed above or to the left of the input field. By default, labels are shown for all input fields. However, in some cases, labels may be hidden if they are redundant or if the context is clear.

**Hint**

Hints are additional text that provide guidance or clarification for a PIN input field. Hints are not visible by default, but can be shown if needed. They are typically displayed below or to the right of the input field and are often used to provide additional context or to explain what type of input is expected.

### radio-button

A radio button input field allows users to select one option from a set of mutually exclusive options. This means that only one option can be selected at a time. This type of input field is commonly used for tasks such as selecting a payment method or a shipping option.

**State**

- **Default**: The default state of a radio button input field, where no option has been selected yet.
- **Hover:** The state of a radio button input field when the user hovers over an option with their cursor, indicating that the option is interactive and can be selected.
- **Active:** The state of a radio button input field when the user has selected an option.

**Label**

The label is text that describes the purpose or function of a radio button input field. Labels are typically displayed to the right of the radio button. By default, labels are shown for all radio button input fields. However, in some cases, labels may be hidden if they are redundant or if the context is clear.

### Stepper

A stepper is an input field that allows users to select a numeric value by incrementing or decrementing the value using arrows or buttons. This type of input field is commonly used for tasks such as selecting a quantity or a rating.

**State**

- **Default**: The default state of a stepper input field.
- **Disabled**: The state of a stepper input field when it is not currently available for user interaction, typically because it is not applicable to the current context or the user does not have permission to interact with it.

## Best Practices

- Use a clear and concise label to describe the purpose or function of each input field.
- Provide hints or guidance as needed to help users understand what type of input is expected.
- Clearly indicate the state of each input field, such as whether it is active, filled, or disabled.
- Use input groups and icons to provide additional context or functionality to input fields.
- Limit the number of options in select and radio input fields to make it easier for users to make a selection.