import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import reducers from './reducers/reducers'
import registerServiceWorker from './config/registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
 );

registerServiceWorker();
