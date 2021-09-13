import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Progress } from '@compassion-gds/react-web';

const WebProgress = reactToWebComponent(Progress, React, ReactDOM);

customElements.define('gds-progress', WebProgress);
