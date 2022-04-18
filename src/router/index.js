import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUserRoutes } from './routes';
import { useSelector } from 'react-redux';

function Router() {
  const user = useSelector((state) => state.auth.user);
  const userRoutes = getUserRoutes(user);
  return (
    <Routes>
      {userRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
}

export default Router;
