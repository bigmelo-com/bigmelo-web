import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import ErrorPage from './error-page';
import About from './routes/About';
import Terms from './routes/Terms'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "terms",
    element: <Terms />,
  },
]);

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PersistGate persistor={persistor}>
       <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PersistGate>
  </>
)
