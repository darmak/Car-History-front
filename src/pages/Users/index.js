import React from 'react';
import PageTitle from '../../components/PageTitle';
import UserList from './components/UserList';

function Users() {
  return (
    <>
      <PageTitle titleText="Users" />
      <UserList />
    </>
  );
}

export default Users;
