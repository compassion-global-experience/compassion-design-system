import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Modal } from '@compassion-gds/react-web';

const WebModal = reactToWebComponent(Modal, React, ReactDOM);

customElements.define('gds-modal', WebModal);
