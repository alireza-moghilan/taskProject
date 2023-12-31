import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// react Component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
// font
import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/font.css';
// component
import { Dashboard } from './dashboard';
import ApexChart from './chartBar';
import {RegisteringDailyTask} from './registeringDailyTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/newTask"} element={<RegisteringDailyTask />} />
              </Routes>
    </BrowserRouter>
    {/* <HomePage/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
