import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import styles from './index.css';

import App from './App/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App title="rabotay naxuy"/>
  </StrictMode>,
);