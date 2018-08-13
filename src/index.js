import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/linea-basic.css'; // Linea basic icon font
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
