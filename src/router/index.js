import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../pages/Home/index.js';
import CarHistory from '../pages/CarHistory/index.js';
import Registration from '../pages/Registration/index.js';
import Authorization from '../pages/Authorization/index.js';
import Garage from '../pages/Garage/index.js';
import AboutUs from '../pages/AboutUs/index.js';
import Profile from '../pages/Profile/index.js';
import Users from '../pages/Users/index.js';
import { userRoles } from '../constans/userRoles.js';
import { permissions } from '../constans/rolePermission.js';

function Router() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car-history" element={<CarHistory />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      {user.permissions.includes(permissions.users.read) && user.role === userRoles.standart ? (
        <Route path="/garage" element={<Garage />} />
      ) : null}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default Router;
