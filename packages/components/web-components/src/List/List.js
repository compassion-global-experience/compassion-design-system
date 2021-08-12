import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { List } from '@compassion-gds/react-web';

const WebList = reactToWebComponent(List, React, ReactDOM);

customElements.define("gds-list", WebList);
