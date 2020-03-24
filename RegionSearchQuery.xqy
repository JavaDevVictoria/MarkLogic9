let $geospatial-region-reference := cts:geospatial-region-path-reference("/doc/location",
      ("coordinate-system=wgs84", "precision=double"))

let $region := cts:polygon((
    cts:point(20.632784, 88.066406),
    cts:point(-11.867351, 102.480469),
    cts:point(-6.664608, 139.746094),
    cts:point(21.289374, 124.980469)
  ))

let $geospatial-region-query := cts:geospatial-region-query(
  $geospatial-region-reference,
  "within",
  $region
)
