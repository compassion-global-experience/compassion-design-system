import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { FileSelect } from '@compassion-gds/react-web';

const WebFileSelect = reactToWebComponent(FileSelect, React, ReactDOM);

customElements.define('gds-file-select', WebFileSelect);
