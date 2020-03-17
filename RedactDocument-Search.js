/*
  NOTE:  To ensure no information leaks, use element-level security to enforce your desired security model.
  Redaction of documents returned from search simply masks the data
*/
'use strict';

const query = 
  `const rdt = require('/MarkLogic/redaction');
   const rulesCollections = ['memo-redaction-rules'];
   rdt.redact(cts.search(cts.wordQuery('silva')), rulesCollections);`;
   
xdmp.eval(
  query,
  null,
  { userId: xdmp.user('bond')}
);
