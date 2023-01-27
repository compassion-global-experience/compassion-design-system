import React from 'react';

import { Cluster, Cover, LogoFull } from '@compassion-gds/react-web';
import '@compassion-gds/react-web/dist/index.css';

const App = () => {
  return (
    <Cover>
      <Cluster justifyContent='flex-end'>
        <ul>
          <li>Contact Us</li>
          <li>Donate Now</li>
        </ul>
      </Cluster>
      <div className='gds-cover__centered'>
        <h1>Known, Loved, and Connected</h1>
        <small>How Compassion strives to serve its neighbors</small>
      </div>
      <div>

        <Cluster>
          <div>
            <LogoFull fill='#fff' width='176px' />
          </div>
        </Cluster>
      </div>
    </Cover>
  );
};

export default App;
