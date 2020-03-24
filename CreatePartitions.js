'use strict'
declareUpdate({ explicitCommit: true });
const ts = require('/MarkLogic/tieredstorage');

ts.queryPartitionCreate(
  xdmp.database('ts-db'),
  'Operational',
  100,
  1,
  xdmp.host()
);

ts.queryPartitionCreate(
  xdmp.database('ts-db'),
  'Reporting',
  200,
  1,
  xdmp.host(),
  'D:/MarkLogic/Data/Reporting'  //directory must exist
); 

ts.queryPartitionCreate(
  xdmp.database('ts-db'),
  'Archival',
  300,
  1,
  xdmp.host(),
  'D:/MarkLogic/Data/Archival'  //directory must exist
); 

ts.queryPartitionCreate(
  xdmp.database('ts-db'),
  'Default',
  400,
  1,
  xdmp.host()
); 

xdmp.commit();

'Tiers created successfully.'
