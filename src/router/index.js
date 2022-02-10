import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom";
import Home from '../pages/Home/index.js';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Router;