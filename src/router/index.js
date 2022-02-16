import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from '../pages/Home/index.js';
import CarHistory from "../pages/CarHistory/index.js";
import Registration from "../pages/Registration/index.js";
import Authorization from "../pages/Authorization/index.js";
import Garage from "../pages/Garage/index.js";
import AboutUs from "../pages/AboutUs/index.js";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car-history" element={<CarHistory/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/authorization" element={<Authorization/>}/>
            <Route path="/garage" element={<Garage/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
    )
}

export default Router;