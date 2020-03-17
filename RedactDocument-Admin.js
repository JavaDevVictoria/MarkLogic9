/* 
  Apply redaction rules in a specific collection to redact a document.
  Remember we are logged into Query Console as an admin, therefore this test isn't fully realistic.
*/

'use strict';

const rdt = require('/MarkLogic/redaction');
const rulesCollections = ['memo-redaction-rules'];

rdt.redact(fn.doc('/secret/99999.json'), rulesCollections);
