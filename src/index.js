import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleProvider } from '@ant-design/cssinjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyleProvider hashPriority="high">
    <App />
  </StyleProvider>
);
