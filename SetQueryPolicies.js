/*
Assign Documents to tiers based on age using the xs.yearMonthDuration
Tiered storage always assume that it is a period in the PAST from today. 
In queries, documents that are up to up to 1 month old

cts:element-range-query(xs:QName("somedate"), ">=", xs:yearMonthDuration("P1M"))
    is equivalent to
cts:element-range-query(xs:QName("somedate"), ">=", fn:current-dateTime() - xs:yearMonthDuration("P1M"))

Overlapping is handled by partition number order. The document stops at the first partition that it matches.
*/

'use strict';
declareUpdate();

const ts = require('/MarkLogic/tieredstorage');


//Documents that are up to one month old will match tier 100
ts.partitionSetQuery(
  xdmp.schemaDatabase(xdmp.database('ts-db')), 
  100, 
  cts.jsonPropertyRangeQuery(
    ('create-time'),
    '>=',
    xs.yearMonthDuration('P1M')
  )
);

//Documents that are up to 2 months old will match tier 200
ts.partitionSetQuery(
  xdmp.schemaDatabase(xdmp.database('ts-db')),
  200,
  cts.jsonPropertyRangeQuery(
    ('create-time'),
    '>=' ,
    xs.yearMonthDuration('P2M')
  )
);


//Documents that are more than 2 months old will mach the tier 300
ts.partitionSetQuery(
  xdmp.schemaDatabase(xdmp.database('ts-db')),
  300,
  cts.jsonPropertyRangeQuery(
    ('create-time'),
    '<' ,
    xs.yearMonthDuration('P2M')
  )
);

`Queries set successfully. 
Explore Schemas database to check queries were saved for each tier. 
Forests that are not part of a query partition will serve as a default partition.`
