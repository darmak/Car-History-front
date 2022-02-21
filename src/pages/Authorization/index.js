import React from 'react';
import PageTitle from '../../components/PageTitle';
import AuthorizationForm from './components/AuthorizationForm';

function Authorization() {
  return (
    <>
      <PageTitle titleText="Sign In" />
      <AuthorizationForm />
    </>
  );
}

export default Authorization;
