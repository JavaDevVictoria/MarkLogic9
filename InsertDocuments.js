'use strict';
declareUpdate();

const documents = [
  {
    "id" : "/doc1.json",
    "create-time" : "2020-02-01T00:00:00",
    "orderAction": "BUY",
    "priceType": "LIMIT",
    "orderTerm": "GOOD_FOR_DAY",
    "quantity": "4",
    "accountId": "83550325",
    "clientOrderId": "asdfdsa12312",
    "limitPrice": "10",
    "stopPrice": "10"
  }
,
  {
    "id": "/doc2.json",
    "create-time" : "2020-01-01T00:00:00",
    "orderAction": "BUY",
    "priceType": "LIMIT",
    "orderTerm": "GOOD_FOR_DAY",
    "quantity": "15",
    "accountId": "78536289",
    "clientOrderId": "gfdfdsa87778",
    "limitPrice": "5",
    "stopPrice": "5"
  }
,
 {
    "id": "/doc3.json",
    "create-time" : "2020-11-01T00:00:00",
    "orderAction": "BUY",
    "priceType": "LIMIT",
    "orderTerm": "GOOD_FOR_DAY",
    "quantity": "100",
    "accountId": "45309840",
    "clientOrderId": "uutrusa67678",
    "limitPrice": "12",
    "stopPrice": "12"
  }
];

if (xdmp.databaseName(xdmp.database()).toLowerCase() !== 'ts-db') {
  'Please set Content Source to "ts-db" before running this code.';
} else {  
documents.map(document => xdmp.documentInsert(document.id, document));
  
`Documents inserted.
Check that the forest document count match the following numbers:
Operational-0001 = 1
Reporting-0001= 1
Archival-0001 = 1
Default-0001 = 0 `
};
