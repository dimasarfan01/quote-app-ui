import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'tailwindcss/tailwind.css';
import App from './App';
import store from './app/store';
import './index.css';

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
