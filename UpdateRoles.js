// give bond the redaction-user role

'use strict';

const user = 'bond';

const config = 
    {
      role: ['secret-read','redaction-user']
    };
const options = {
  authentication: {
    method: 'digest',
    username: 'admin',
    password: 'admin'
  },
  data: xdmp.quote(config), //xdmp.quote() formats the config object as a string so the REST endpoint understands it
  headers : {
    'content-type' : 'application/json'
  }
};
xdmp.httpPut(`http://localhost:8002/manage/v2/users/${user}/properties`, options);
