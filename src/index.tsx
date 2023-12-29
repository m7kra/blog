import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorThemeProvider } from '@m7kra/color-theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ColorThemeProvider theme='dark'>
            <App />
        </ColorThemeProvider>
    </React.StrictMode>
);

