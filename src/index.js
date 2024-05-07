import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

// custom style
import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/aside.css';
import "./assets/css/changeColorBtn.css";
import "./assets/css/darkTheme.css";

// font
import './assets/css/font/font.css';

// JavaScript 
import './assets/js/code.js';

// bootstrap js
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// component
import AppRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';
// import { GetDataAndPushInContext } from './components/task/getData';

// modal
import { ModalCustom } from './components/modal/modal';

// export const store = createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ModalCustom />
    <AppRoutes />
    {/* <GetDataAndPushInContext /> */}
    <ToastContainer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
