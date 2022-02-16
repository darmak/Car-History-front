import React from 'react';
import PageTitle from '../../components/Title';
import AuthorizationForm from './components/AuthorizationForm';

const Authorization= () => {
    return (
        <>
            <PageTitle titleText="Sign In"/>
            <AuthorizationForm/>
        </>
  )
}

export default Authorization;