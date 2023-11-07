import './badge.scss';
import '../Icon/icon.scss';

export default {
  title: 'Components/Badge',
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['primary', 'warning', 'danger', 'success', 'info', 'neutral'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['rounded', 'pill'],
    },
    icon: { control: 'text', description: 'Icon class name' },
    iconPosition: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
  },
};

const createBadge = ({
  label,
  status = 'neutral',
  borderRadius = 'rounded',
  icon,
  iconPosition = 'start',
}) => {
  const badge = document.createElement('div');
  badge.className = [
    `cds-badge`,
    `cds-badge__${status}`,
    `cds-badge__${borderRadius}`,
    icon ? `cds-badge__icon-${iconPosition}` : '',
  ]
    .join(' ')
    .trim();

  const badgeLabel = document.createElement('span');
  badgeLabel.innerText = label;
  badge.appendChild(badgeLabel);

  if (icon) {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('cds-icon__container');

    const iconElement = document.createElement('i');
    iconElement.classList.add(icon);
    iconElement.setAttribute('aria-hidden', 'true');

    const iconDescriptionElement = document.createElement('span');
    iconDescriptionElement.classList.add('cds-icon__description');
    iconDescriptionElement.innerText = `Icon for badge: ${label}`;

    iconContainer.appendChild(iconElement);
    iconContainer.appendChild(iconDescriptionElement);
    badge.insertAdjacentElement('afterBegin', iconContainer);

    badge.appendChild(iconContainer);
  }

  return badge;
};

const Template = (args) => {
  return createBadge(args);
};

export const Default = Template.bind({});
Default.args = {
  label: 'Badge',
};
