import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create a single root (React 18+ / 19)
const root = createRoot(document.getElementById('root'));

function renderTime() {
  root.render(<App />);
}

// Initial render and update every second
renderTime();
setInterval(renderTime, 1000);
