import React, { useState } from 'react';

import UserList from './components/UserList';
import UsersTitleWithBtn from './components/TitleWithBtn';
import CreateCssForm from './components/CreateCssForm/index';

function Users() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <UsersTitleWithBtn setIsModalVisible={setIsModalVisible} />
      <UserList />
      <CreateCssForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
}

export default Users;
