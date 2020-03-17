// apply redaction rules in a specific collection to redact a document

'use strict';

const query = 
  `const rdt = require('/MarkLogic/redaction');
   const rulesCollections = ['agent-redaction-rules'];
   rdt.redact(fn.doc("/top-secret/88888.json"), rulesCollections);`;
   
xdmp.eval(
  query,
  null,
  { userId: xdmp.user('bond')}
);
