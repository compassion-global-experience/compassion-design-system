import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Menu } from '@compassion-gds/react-web';

const WebMenu = reactToWebComponent(Menu, React, ReactDOM);

customElements.define("gds-menu", WebMenu);
