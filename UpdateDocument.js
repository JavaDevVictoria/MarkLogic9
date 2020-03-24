'use strict';
declareUpdate();

//When a document create-time property is updated, that document gets immediately reinserted in the correct partition.
//To check to see if document will also naturally automatically move to the correct tier as they age, we will have to wait long enough
//Instead you may want to change the query policies time duration to minutes and observe the documents move quicker


const document = cts.doc('/doc1.json');
const documentObject = document.toObject();

if (xdmp.databaseName(xdmp.database()).toLowerCase() !== 'ts-db') {
  'Please set Content Source to "ts-db" before running this code.';
} else {
documentObject['create-time'] = '2016-01-01T00:00:00';
xdmp.nodeReplace(document, documentObject);
`Document updated. 
Check that the forest document count matches the following numbers:
Operational-0001 = 0
Reporting-0001= 1 
Archival-0001 = 2
Default-0001 = 0 `
};

