/*
  Create a redaction rule for the source/name property.
  Load the redaction rule into the Schemas database.
*/

'use strict';
declareUpdate();

const nameRule = 
{
    rule: {
        description: 'redact source/name property',
        path: '/source/name',
        namespaces: [],
        method: {
            function: 'mask-random'
        },
        options: {
          length: 10
        }
    }
};

if (xdmp.databaseName(xdmp.database()) === 'Schemas') {
  
  xdmp.documentInsert(
    '/redaction/rule/name.json',
    nameRule,
    [xdmp.permission('secret-read', 'read'), xdmp.permission('project-admin', 'read'), xdmp.permission('project-admin', 'update')],
    'memo-redaction-rules'
  );
} else {
  'Please select the Schemas database from the Content Source menu and run this script again.'; 
}
