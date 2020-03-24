'use strict';

const admin = require('/MarkLogic/admin');
let dbconfig = admin.getConfiguration();
const dbid = admin.databaseGetId(dbconfig, 'ts-db');
const policy = admin.queryAssignmentPolicy(1);

dbconfig = admin.databaseSetAssignmentPolicy(
  dbconfig, 
  dbid, 
  policy
);

admin.saveConfiguration(dbconfig);

'Assignment policy set to query type.';

