/*
  Create all the users used in this example and assign them to appropriate roles.
  Note:  If in the past you have completed Episode 2 of the Security On Demand Series then you can skip this step.
*/

'use strict';

const users = [
  {'user-name': 'project-default-user', 'password': 'pass', 'role': ['project-default']},
  {'user-name': 'm', 'password': 'pass', 'role': ['project-admin', 'top-secret-read', 'secret-read']},
  {'user-name': 'bond', 'password': 'pass', 'role': ['secret-read']}
];

const insertUser = (user) => {
  const options = {
    authentication: {
      method: 'digest',
      username: 'admin',
      password: 'admin'
    },
    data: xdmp.quote(user),
    headers : {
      'content-type' : 'application/json'
    }
  };
  xdmp.httpPost('http://localhost:8002/manage/v2/users', options);
  return `${user['user-name']} inserted`;
}

users.map(user => insertUser(user));
