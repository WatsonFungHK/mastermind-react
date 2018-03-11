import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Reducer from './redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(Reducer)}>
		<App />
	</Provider>,
 	document.getElementById('root'));

// registerServiceWorker();
