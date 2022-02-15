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


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car-history" element={<CarHistory/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/authorization" element={<Authorization/>}/>
            <Route path="/garage" element={<Garage/>}/>
        </Routes>
    )
}

export default Router;