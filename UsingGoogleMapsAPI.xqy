(:

If you wish to use the Google Map API to return your favorite dive site address coordinates

:)

let $location := xdmp:url-encode("koh lanta")
let $request := fn:concat("http://maps.googleapis.com/maps/api/geocode/xml?address=", $location)
let $response := xdmp:http-get($request)
return $response[2]/GeocodeResponse/result[1]
