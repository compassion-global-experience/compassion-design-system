import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Input } from '@compassion-gds/react-web';

const WebInput = reactToWebComponent(Input, React, ReactDOM);

customElements.define("gds-input", WebInput);
