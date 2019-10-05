import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './router/Router';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import './fontello/css/fontello.css';

ReactDOM.render(<Router />, document.getElementById('app'));

serviceWorker.unregister();
