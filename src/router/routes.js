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

export const routes = [
  { path: '/', element: <Home />, title: 'Home' },
  {
    path: '/garage',
    permissions: [permissions.cars.read],
    roles: [userRoles.standart],
    element: <Garage />,
    title: 'Garage'
  },
  {
    path: '/profile',
    permissions: [permissions.users.read],
    element: <Profile />,
    title: 'Profile'
  },
  {
    path: '/users',
    permissions: [permissions.users.read],
    roles: [userRoles.admin],
    element: <Users />,
    title: 'Users'
  },
  { path: '/about-us', element: <AboutUs />, title: 'About Us' },
  { path: '/car-history/:carId', element: <CarHistory />, title: 'Car History', hideInMenu: true },
  { path: '/registration', element: <Registration />, title: 'Registration', hideInMenu: true },
  { path: '/authorization', element: <Authorization />, title: 'Authorization', hideInMenu: true }
];

export const getUserRoutes = (user) => {
  return routes.filter((route) => {
    if (
      user &&
      user.permissions &&
      route.permissions &&
      route.permissions.every((p) => user.permissions.includes(p))
    ) {
      return route.roles ? route.roles.includes(user.role) : true;
    }

    return !route.permissions && !route.roles;
  });
};
