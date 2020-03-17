//  insert example agent doc in the Documents database.

'use strict';
declareUpdate();

if (xdmp.databaseName(xdmp.database()) === 'Documents') {
  
  xdmp.documentInsert(
    '/top-secret/88888.json',
    {
      agent: 
      {
        fname: 'Felix',
        lname: 'Leiter',
        agency: 'CIA',
        relationship: 'friend of James Bond',
        email: 'felix@cia.gov',
        ssn: '123-45-6789'
      }
    },
    [xdmp.permission('secret-read', 'read'), xdmp.permission('project-admin', 'update')],
    ['agents']
  );
} else {
  'Please select the Documents database from the Content Source menu and run this script again.'; 
}
