import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Reducer } from './reducers';
import { Provider } from "react-redux"


// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
// font
import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/font/font.css';
import './assets/css/aside.css';
// component
import AppRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';

// export const store = createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <AppRoutes />
      <ToastContainer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
