import React from 'react';
import About from './components/About';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <About />
  </React.StrictMode>
);

// Use createRoot to render your React component
const rootDOM = createRoot(root);
rootDOM.render(rootElement);

