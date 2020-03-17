/* 
  Apply redaction rules in a specific collection to redact a document.
  Use xdmp.eval to simulate running this as Bond, which is more realistic.
*/

'use strict';

const query = 
  `const rdt = require('/MarkLogic/redaction');
   const rulesCollections = ['memo-redaction-rules'];
   rdt.redact(fn.doc('/secret/99999.json'), rulesCollections);`;
   
xdmp.eval(
  query,
  null,
  { userId: xdmp.user('bond')}
);
