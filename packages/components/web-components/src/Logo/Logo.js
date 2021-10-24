import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { LogoFull, LogoMinimal } from '@compassion-gds/react-web';

const WebLogoFull = reactToWebComponent(LogoFull, React, ReactDOM);
const WebLogoMinimal = reactToWebComponent(LogoMinimal, React, ReactDOM);

customElements.define('gds-logo-full', WebLogoFull);
customElements.define('gds-logo-minimal', WebLogoMinimal);
