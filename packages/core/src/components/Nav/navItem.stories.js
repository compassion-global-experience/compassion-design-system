import './navItem.scss';
import '../Icon/icon.scss';

export default {
  title: 'Components/Nav/NavItem',
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    icon: { control: 'text' },
    iconDescription: { control: 'text' },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_parent', '_self', '_top'],
    },
    isDisabled: {
      control: { type: 'select' },
      options: [true, false],
    },
    isActive: {
      control: { type: 'select' },
      options: [true, false],
    },
    isContained: {
      control: { type: 'select' },
      options: [true, false],
    },
  },
  decorators: [
    (story) => {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.setAttribute('style', 'background-color: #fff; padding: 50px');
      wrapperDiv.appendChild(story());
      return wrapperDiv;
    },
  ],
};

// TODO: Add subnav events/animations

const createNavItem = ({
  text,
  href,
  icon,
  iconDescription,
  target = '_self',
  isDisabled = false,
  isActive = false,
  subItems = [],
  isSubNav = false,
  isContained = false,
}) => {
  const navItemContainer = document.createElement('div');
  navItemContainer.className = 'cds-navItemContainer';
  if (!isSubNav && isContained) {
    navItemContainer.classList.add('cds-navItemContainer--contained');
  }

  const navItem = document.createElement('div');
  navItem.classList.add('cds-navItem');

  const navTextContainer = document.createElement('div');
  navTextContainer.className = 'cds-navItemText';

  if (isDisabled) {
    navItem.classList.add('cds-navItem--disabled');
    const navDisabledLinkText = document.createElement('span');
    navDisabledLinkText.textContent = text;
    navTextContainer.appendChild(navDisabledLinkText);
  } else {
    if (isActive) {
      navItem.classList.add('cds-navItem--active');
    }
    const navLink = document.createElement('a');
    navLink.setAttribute('href', href);
    navLink.setAttribute('target', target);
    navLink.setAttribute('aria-disabled', isDisabled);
    navLink.textContent = text;
    navTextContainer.appendChild(navLink);
  }

  if (icon) {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('cds-icon__container');
    const iconElement = document.createElement('i');
    iconElement.classList.add(icon);
    iconElement.setAttribute('aria-hidden', 'true');
    const iconDescriptionElement = document.createElement('span');
    iconDescriptionElement.classList.add('cds-icon__description');
    iconDescriptionElement.textContent = iconDescription;
    iconContainer.appendChild(iconElement);
    iconContainer.appendChild(iconDescriptionElement);
    navItem.appendChild(iconContainer);
  }

  navItem.appendChild(navTextContainer);
  navItemContainer.appendChild(navItem);

  if (!isSubNav && subItems.length > 0) {
    const subNavButton = document.createElement('button');
    subNavButton.classList.add('cds-icon__container');
    const subNavIcon = document.createElement('i');
    subNavIcon.classList.add('ph-caret-down');
    subNavIcon.setAttribute('aria-hidden', 'true');
    subNavButton.appendChild(subNavIcon);
    navItem.appendChild(subNavButton);

    // Create the subitems
    const subNavContainer = document.createElement('div');
    subNavContainer.className = 'cds-subNavContainer';
    navItemContainer.appendChild(subNavContainer);
    subItems.forEach((subitem) => {
      subNavContainer.appendChild(
        createNavItem({ ...subitem, isSubNav: true }),
      );
    });
  }

  return navItemContainer;
};

const Template = (args) => {
  return createNavItem(args);
};

// Stories to caputure different UI states based on args
export const SingleNavItem = Template.bind({});
SingleNavItem.args = {
  text: 'Hello World',
  href: '#',
  icon: 'ph-house',
  iconDescription: 'Website home',
};

export const NavItemWithSubnav = Template.bind({});
NavItemWithSubnav.args = {
  text: 'Hello World',
  href: '#',
  icon: 'ph-house',
  iconDescription: 'Website home',
  subItems: [
    {
      text: 'Sub Nav Item 1',
      href: '#',
      icon: 'ph-star',
      iconDescription: 'Starred',
    },
    { text: 'Sub Nav Item 2', href: '#' },
    { text: 'Sub Nav Item 3', href: '#' },
  ],
};

export const ContainedNavItem = Template.bind({});
ContainedNavItem.args = {
  text: 'Hello World',
  href: '#',
  icon: 'ph-house',
  iconDescription: 'Website home',
  isContained: true,
  subItems: [
    {
      text: 'Sub Nav Item 1',
      href: '#',
      icon: 'ph-star',
      iconDescription: 'Starred',
    },
    { text: 'Sub Nav Item 2', href: '#' },
    { text: 'Sub Nav Item 3', href: '#' },
  ],
};
