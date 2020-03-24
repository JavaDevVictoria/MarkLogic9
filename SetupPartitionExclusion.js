'use strict';
declareUpdate();

const ts = require('/MarkLogic/tieredstorage');

ts.partitionSetExclusionEnabled(
  xdmp.schemaDatabase(xdmp.database('ts-db')),
  100, 
  false
);

ts.partitionSetExclusionEnabled(
  xdmp.schemaDatabase(xdmp.database('ts-db')),
  200, 
  true
);

ts.partitionSetExclusionEnabled(
  xdmp.schemaDatabase(xdmp.database('ts-db')),
  300,
  true
);

'Query exclusion set on Reporting (200) and Archival (300) partitions.'
