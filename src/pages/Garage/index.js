import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CarList from './components/CarList';
import CreateCarForm from './components/CreateCarForm';
import GarageTitleWithBtn from './components/TitleWithBtn';
import HasPermissions from '../../helpers/HasPermissions';
import { permissions } from '../../constans/rolePermission';
import { userRoles } from '../../constans/userRoles';

function Garage() {
  const user = useSelector((state) => state.users?.user);
  const userPermissions = useSelector((state) => state.auth.user?.permissions);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <GarageTitleWithBtn setIsModalVisible={setIsModalVisible} />
      <CarList />
      <HasPermissions
        role={user.role}
        userPermissions={userPermissions}
        requiredPermission={permissions.cars.create}
        requiredRole={userRoles.standart}>
        <CreateCarForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      </HasPermissions>
    </>
  );
}

export default Garage;
