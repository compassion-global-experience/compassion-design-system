import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { ProgressBar } from '@compassion-gds/react-web';

const WebProgressBar = reactToWebComponent(ProgressBar, React, ReactDOM);

customElements.define("gds-progress-bar", WebProgressBar);
