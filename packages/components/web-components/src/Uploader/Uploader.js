import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Uploader } from '@compassion-gds/react-web';

const WebUploader = reactToWebComponent(Uploader, React, ReactDOM);

customElements.define("gds-uploader", WebUploader);
