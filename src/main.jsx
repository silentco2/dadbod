import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./scss/styles.scss";
import App from "./App.jsx";
import Layout from "./components/layout/Layout";
import Map from './components/map/Map.jsx';
import Tdee from './components/calculators/tdee/Tdee.jsx';
import Nutrition from './components/calculators/nutrition/Nutrition.jsx';
import * as bootstrap from "bootstrap";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Map />}/>
              {['carb-cycling', 'keto-cycling', 'standard'].map(path => <Route path={path} key={path} element={<Tdee/>} />)}
              <Route path='nutrition-data' element={<Nutrition/>}/>
            </Route>
          </Routes>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );

  