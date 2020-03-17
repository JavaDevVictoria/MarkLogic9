/*
  Create redaction rules for the:
    -agent/fname property that will select first names from a dictionary
    -agent/lname property that will select last names from a dictionary
    -agent/email property using the redact-email function
    -agent/ssn property using the redact-us-ssn function
  Load the redaction rules into the Schemas database.
*/

'use strict';
declareUpdate();

const rules = [
  {
    uri: '/redaction/rule/agent-fname.json',
    ruleSpec: {
      description: 'redact agent/fname property using dictionary',
      path: '/agent/fname',
      namespaces: [],
      method: {
          'function': 'mask-random'
      },
      options: {
        dictionary: '/redaction/dictionaries/fnames.json'
      }
    }
  },
  {
    uri: '/redaction/rule/agent-lname.json',
    ruleSpec: {
      description: 'redact agent/lname property using dictionary',
      path: '/agent/lname',
      namespaces: [],
      method: {
          'function': 'mask-random'
      },
      options: {
        dictionary: '/redaction/dictionaries/lnames.json'
      }
    }
  },
  {
    uri: '/redaction/rule/agent-email.json',
    ruleSpec: {
      description: 'redact agent/email property',
      path: '/agent/email',
      namespaces: [],
      method: {
          'function': 'redact-email'
      },
      options: {
      }
    }
  },
  {
    uri: '/redaction/rule/agent-ssn.json',
    ruleSpec: {
      description: 'redact agent/ssn property',
      path: '/agent/ssn',
      namespaces: [],
      method: {
          'function': 'redact-us-ssn'
      },
      options: {
      }
    }
  }
];

const insertRules = (rule) => {
  xdmp.documentInsert(
    rule.uri,
    {rule: rule.ruleSpec},
    [xdmp.permission('secret-read', 'read'), xdmp.permission('project-admin', 'update')],
    'agent-redaction-rules'
  );
  return `${rule.uri} inserted`;
};

if (xdmp.databaseName(xdmp.database()) === 'Schemas') {
  rules.map(rule => insertRules(rule));
} else {
  'Please select the Schemas database from the Content Source menu and run this script again.';
}
