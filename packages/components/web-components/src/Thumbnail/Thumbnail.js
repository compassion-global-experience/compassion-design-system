import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Thumbnail } from '@compassion-gds/react-web';

const WebThumbnail = reactToWebComponent(Thumbnail, React, ReactDOM);

customElements.define('gds-thumbnail', WebThumbnail);
