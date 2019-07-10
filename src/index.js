import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { initListener, handleChange } from './listener'
import { init } from './reducers/todos/actions'
import { loadLocalData } from './storage'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const tasks = loadLocalData('tasks') || []

store.dispatch(init(tasks))

initListener(store)
store.subscribe(handleChange)
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
