import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { App } from './App';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PersistGate persistor={persistor}>
       <Provider store={store}>
        <App></App>
      </Provider>
    </PersistGate>
  </>
)
