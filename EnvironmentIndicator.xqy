declare namespace appservices="http://marklogic.com/appservices";
let $cluster as xs:string := xdmp:cluster-name()
let $config as element(appservices:environment-ui) := 
  <appservices:environment-ui>
    <appservices:ui-active>true</appservices:ui-active>
    <appservices:ui-name>centos7-vm-cluster</appservices:ui-name>
    <appservices:ui-label>? PRODUCTION ?</appservices:ui-label>
    <appservices:ui-header-color>#FF6666</appservices:ui-header-color>
    <appservices:ui-header-text-color>#000000</appservices:ui-header-text-color>
    <appservices:ui-message>(Message of the Day) \n\nPlease acknowledge you have read this by
    closing this alert or clicking "OK".  
    You may not continue to use this application until you have done so.
    </appservices:ui-message>
  </appservices:environment-ui>
return 
  xdmp:node-replace(
    fn:doc('/cluster-ui-settings.xml')//appservices:environment-ui[./appservices:ui-name eq $cluster], 
    $config
  )
;
fn:doc('/cluster-ui-settings.xml') 
