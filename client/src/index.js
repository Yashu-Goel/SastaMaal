import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div class="overlay">
      <div class="message"><h3>Please rotate your device</h3><br /><span>We dont't support landscape mode</span><br /><span>Please go back to portrait mode for best experience.</span></div>
    </div>
  </React.StrictMode>
);
