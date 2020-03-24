(: 
In this fourth tab, let's calculate the distance in feet between the 2 best rated diving circuits in Thailand 
:)

"1. Using float precision: ",
geo:distance(
  cts:point(7.599906,99.03523500000006),
  cts:point(7.650566, 99.03743499999996),
  ("coordinate-system=wgs84","precision=float","units=feet"));

"2. Using double precision: ",
geo:distance(
  cts:point(7.599906,99.03523500000006),
  cts:point(7.650566, 99.03743499999996),
  ("coordinate-system=wgs84","precision=double","units=feet"));
  
(: 
1. result: 18398.5656287115
2. result: 18398.7527797624 
:)
