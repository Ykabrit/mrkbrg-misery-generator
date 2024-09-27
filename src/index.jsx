import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CharacterProvider>
      <App />
    </CharacterProvider>,
);
