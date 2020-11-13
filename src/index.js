import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { PersistGate } from 'redux-persist/integration/react'

import reducers from './reducers'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}
const persistedReducer = persistReducer(persistConfig, reducers) // create a persisted reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />

    </PersistGate>
    </Provider>,
    document.getElementById('root')
);