import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from '../universal/app';

(async () => {
  // Set clientSideID to your own Client-side ID. You can find this in
  // your LaunchDarkly portal under Account settings / Projects
  const LDProvider = await asyncWithLDProvider({ clientSideID: '60524d9ce9c4b50e7d2ca0d4' });

  render(
    <BrowserRouter>
      <LDProvider>
        <App />
      </LDProvider>
    </BrowserRouter>,
    document.getElementById('reactDiv'),
  );
})();
