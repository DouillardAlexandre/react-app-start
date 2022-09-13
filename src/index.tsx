import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from "./utils/api-middleware.utils";
import rootReducer from './redux/_index.reducers';
//import WebFont from 'webfontloader';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Provider } from "react-redux";
import { accountInit } from './redux/account.actions';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const persistConfig = {
  key: 'root',
  storage
} 

//Load fond
/*WebFont.load({
  google: { families: ['Open Sans:400,600,700', 'sans-serif'] }
})*/

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(apiMiddleware),
)

const persistor = persistStore(store)

const initReducers = () => {

  store.dispatch(accountInit())

}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={initReducers}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
