import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Button } from '@compassion-gds/react-web';

const WebButton = reactToWebComponent(Button, React, ReactDOM);

customElements.define("gds-button", WebButton);
