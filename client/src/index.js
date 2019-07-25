import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/';

//const store = devToolsEnhancer();
const store = composeWithDevTools(applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStore(reducers, store)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
