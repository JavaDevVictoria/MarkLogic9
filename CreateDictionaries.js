/*
  Create dictionaries to redact agent first and last names with realistic but fictitious information
*/

'use strict';
declareUpdate();

const dictionaries = [
  {
    uri: 'fnames',
    data: {
      dictionary: {
        entry: ['Joe', 'Jane', 'John', 'Julie']
      }
    }
  },
  {
    uri: 'lnames',
    data: {
      dictionary: {
        entry: ['Smith', 'Jones', 'Rodriguez', 'Johnson']
      }
    }
  }
];

const insertDictionary = (dictionary) => {
  xdmp.documentInsert(
    `/redaction/dictionaries/${dictionary.uri}.json`,
    dictionary.data,
    [xdmp.permission('secret-read', 'read'), xdmp.permission('project-admin', 'update')],
    'dictionaries'
  );
  return `Dictionary inserted (${dictionary.uri})`;
};

if (xdmp.databaseName(xdmp.database()) === 'Schemas') {
  dictionaries.map(dictionary => insertDictionary(dictionary));
} else {
  'Please select the Schemas database from the Content Source menu and run this script again.';
}
