import './badge.scss';
import '../Icon/icon.scss';

import decorateComponents from '../../utils/decorateComponents';

export default {
  title: 'Components/Badge',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text displayed by the badge. Should be short and concise.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['primary', 'warning', 'danger', 'success', 'info', 'neutral'],
      description: 'Status the badge represents, if applicable.',
      table: {
        defaultValue: {
          summary: 'neutral',
        },
      },
    },
    borderRadius: {
      control: { type: 'radio' },
      options: ['rounded', 'pill'],
      description: 'Whether the badge should be pill-shaped or not.',
      table: {
        defaultValue: {
          summary: 'rounded',
        },
      },
    },
    icon: {
      control: 'text',
      description:
        'Icon name; see the list of [available Phosphor Icons](https://phosphoricons.com/).',
      table: { type: { summary: 'string' } },
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['start', 'end'],
      description: 'Where to position the badge’s icon, if applicable.',
      table: {
        defaultValue: {
          summary: 'start',
        },
      },
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

const statusArgTypes = {
  control: { type: 'select' },
  options: ['primary', 'warning', 'error', 'success', 'info', 'neutral'],
};

export const Status = Template.bind({});
Status.args = {
  label: 'Primary',
};
Status.argTypes = { status: statusArgTypes };
Status.decorators = [
  () =>
    decorateComponents([
      createBadge({ label: 'Primary', status: 'primary' }),
      createBadge({ label: 'Info', status: 'info' }),
      createBadge({ label: 'Success', status: 'success' }),
      createBadge({ label: 'Warning', status: 'warning' }),
      createBadge({ label: 'Danger', status: 'danger' }),
      createBadge({ label: 'Neutral' }),
    ]),
];

const borderRadiusArgTypes = {
  control: { type: 'radio' },
  options: ['rounded', 'pill'],
};

export const BorderRadius = Template.bind({});
BorderRadius.argTypes = {
  borderRadius: borderRadiusArgTypes,
};
BorderRadius.decorators = [
  () =>
    decorateComponents([
      createBadge({
        label: 'Rounded Badge',
        status: 'neutral',
      }),
      createBadge({
        label: 'Pill Badge',
        status: 'neutral',
        borderRadius: 'pill',
      }),
    ]),
];

const withIconArgTypes = {
  icon: {
    control: { type: 'text' },
  },
  iconPosition: {
    control: { type: 'radio' },
    options: ['start', 'end'],
  },
};

export const WithIcon = Template.bind({});
WithIcon.argTypes = {
  icon: withIconArgTypes.icon,
  iconPosition: withIconArgTypes.iconPosition,
};
WithIcon.decorators = [
  () =>
    decorateComponents([
      createBadge({
        label: 'With iconPosition: end',
        status: 'neutral',
        icon: 'ph-arrow-right',
        iconPosition: 'end',
      }),
      createBadge({
        label: 'With iconPosition: start',
        status: 'neutral',
        icon: 'ph-warning',
        iconPosition: 'start',
      }),
    ]),
];
