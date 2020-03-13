//  insert example memo doc in the Documents database.

'use strict';
declareUpdate();

if (xdmp.databaseName(xdmp.database()) === 'Documents') {
  
  xdmp.documentInsert(
    '/secret/99999.json',
    {
      'clearance': 'secret',
      'author': 'M',
      'subject': 'SPECTRE',     
      'body': 'SPECTRE is planning to meet soon in Barcelona.  I need you to go immediately and capture the suspects.',
      'source':
        {
          'description': 'undercover MI6 agent',
          'name': 'Raoul Silva',
          'location': 'Shanghai',
          'date': '2017-05-01'
        }
    },
    [xdmp.permission('secret-read', 'read'), xdmp.permission('project-admin', 'update')],
    ['memos']
  );
} else {
  'Please select the Documents database from the Content Source menu and run this script again.'; 
}
