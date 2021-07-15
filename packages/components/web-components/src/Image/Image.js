import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Image } from '@compassion-gds/react-web';

const WebImage = reactToWebComponent(Image, React, ReactDOM);

customElements.define("gds-image", WebImage);
 