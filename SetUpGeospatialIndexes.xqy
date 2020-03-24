xquery version "1.0-ml";
import module namespace admin = "http://marklogic.com/xdmp/admin" 
  at "/MarkLogic/admin.xqy";

let $config := admin:get-configuration()
let $database-id := admin:database-get-id($config,"Documents")
let $geospatial-region-path-indexes := admin:database-geospatial-region-path-index(
  "/doc/location", 
  "wgs84/double", 
  6,
  "reject")
  
let $geo-region-index-config := admin:database-add-geospatial-region-path-index(
  $config, 
  $database-id, 
  $geospatial-region-path-indexes)

return admin:save-configuration($geo-region-index-config)
