/* Document sample
{
    "id" : "/doc1.json",
    "create-time" : "2017-01-01T00:00:00",
    "orderAction": "BUY",
    "priceType": "LIMIT",
    "orderTerm": "GOOD_FOR_DAY",
    "quantity": "4",
    "accountId": "83550325",
    "clientOrderId": "asdfdsa12312",
    "limitPrice": "10",
    "stopPrice": "10"
  }
*/
'use strict';
declareUpdate();

const admin = require('/MarkLogic/admin');
let dbconfig = admin.getConfiguration();
const dbid = xdmp.database('ts-db');
const rangespec = admin.databaseRangeElementIndex('dateTime','','create-time','', false);

dbconfig = admin.databaseAddRangeElementIndex(
  dbconfig, 
  dbid,
  rangespec
);

admin.saveConfiguration(dbconfig);

'Range index created successfully.';
