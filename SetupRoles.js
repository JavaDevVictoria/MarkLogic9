/*
  Create all the roles used in this example.
  Note:  If in the past you have completed Episode 2 of the Security On Demand Series then you can skip this step.
*/

'use strict';

const roles = ['project-default', 'project-admin', 'secret-read', 'top-secret-read'];
               
const insertRole = (role) => {
  const data = { 'role-name': role };
  const options = {
    authentication: {
      method: 'digest',
      username: 'admin',
      password: 'admin'
    },
    data: xdmp.quote(data),
    headers : {
      'content-type' : 'application/json'
    }
  };
  xdmp.httpPost('http://localhost:8002/manage/v2/roles', options);
  return `${role} inserted`;
}

roles.map(role => insertRole(role));
