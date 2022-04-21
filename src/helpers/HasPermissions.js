import React from 'react';

function HasPermissions({ children, role, userPermissions, requiredPermission, requiredRole }) {
  return (
    <>{role === requiredRole && userPermissions.includes(requiredPermission) ? children : null}</>
  );
}

export default HasPermissions;
