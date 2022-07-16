import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/components';
import {filmInfo} from 'src/mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmInfo={filmInfo}
    />
  </React.StrictMode>,
);
