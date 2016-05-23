import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import AppContainer from './containers/appContainer'
import RootReducer from './reducers/root'

render(
  <Provider store={createStore(RootReducer)}>
   <AppContainer />
  </Provider>,
  document.getElementById('root')
);