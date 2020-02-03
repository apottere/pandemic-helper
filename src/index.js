import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './app';
import { AppStateProvider } from './state';

const Main = () => (
    <AppStateProvider>
        <App />
    </AppStateProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
