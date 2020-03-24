'use strict';

const admin = require('/MarkLogic/admin');
let dbconfig = admin.getConfiguration();

dbconfig = admin.databaseSetLocking(
  dbconfig, 
  xdmp.database('ts-db'),
  'strict'
);

admin.saveConfiguration(dbconfig);

'Locking set to strict successfully';
