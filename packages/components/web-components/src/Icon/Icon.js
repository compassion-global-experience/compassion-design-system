import { icons } from '@compassion-gds/elements';

const toKebabCase = string => string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase();

const iconList = Object.keys(icons)
  .map(icon => ({ name: toKebabCase(icon), svg: icons[icon] }));

const iconStyles = `
  <style>
    :host {
      display: inline;
    }

    svg {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
  </style>
`;

class WebIcon extends HTMLElement {
  static get observedAttributes() {
    return [ 'name' ];
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(newValue) {
    this.setAttribute('name', newValue);
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback() {
    const currentIcon = iconList.find(i => i.name === this.name);

    this.shadowRoot.innerHTML = `${iconStyles} ${currentIcon ? currentIcon.svg : ''}`;
  }
}

customElements.define('gds-icon', WebIcon);

