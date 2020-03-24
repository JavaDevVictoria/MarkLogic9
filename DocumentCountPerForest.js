'use strict';

if (xdmp.databaseName(xdmp.database()).toLowerCase() !== 'ts-db') {
  'Please set Content Source to "ts-db" before running this code.';
} else {
const forests = {};
for (let forestID of xdmp.databaseForests(xdmp.database())) {
  forests[(xdmp.forestName(forestID))] = fn.head(xdmp.forestCounts(forestID)).documentCount;
}
forests;
};
