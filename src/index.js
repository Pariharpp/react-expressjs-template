import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// JS
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('bootstrap');
// CSS
import styles from './scss/app.scss';

ReactDOM.render(<App/>, document.getElementById('root'));
