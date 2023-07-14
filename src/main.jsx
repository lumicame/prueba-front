import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import reducer from './reducers/index.js'
import { combineReducers,legacy_createStore as createStore,applyMiddleware } from 'redux'
import mySaga from './sagas/index.js'
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({reducer})
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
