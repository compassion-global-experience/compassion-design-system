import { icons } from '@compassion-gds/elements';

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
    return ['name'];
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
    const currentIcon = icons[this.name];
    this.shadowRoot.innerHTML = `${iconStyles} ${currentIcon || ''}`;
  }
}

customElements.define('gds-icon', WebIcon);
