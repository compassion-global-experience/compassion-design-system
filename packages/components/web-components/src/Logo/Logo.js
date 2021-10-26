import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Logo } from '@compassion-gds/react-web';

const WebLogo = reactToWebComponent(Logo, React, ReactDOM);

customElements.define('gds-logo', WebLogo);
