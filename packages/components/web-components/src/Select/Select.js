import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Select } from '@compassion-gds/react-web';

const WebSelect = reactToWebComponent(Select, React, ReactDOM);

customElements.define("gds-select", WebSelect);