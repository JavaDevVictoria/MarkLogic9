xdmp:document-insert(
  "geo-south-east-asia-region.xml",
  <doc>
    <region-type>polygon</region-type>
    <src>Waters of South East Asia</src>
    <creation-date>{ xs:date("2017-04-02") }</creation-date>
    <location>
    {cts:polygon((
    cts:point(20.632784, 88.066406),
    cts:point(-11.867351, 102.480469),
    cts:point(-6.664608, 139.746094),
    cts:point(21.289374, 124.980469)    
    ))}
    </location>
  </doc>
  );
 
xdmp:document-insert(
  "geo-box-1.xml",
  <doc>
    <region-type>box</region-type>
    <src>Koh Lanta</src>
    <creation-date>{ xs:date("2017-04-02") }</creation-date>
    <location>
    {fn:string(cts:box(
    7.4672929, 
    99.0163766, 
    7.8567634, 
    99.1521668
    ))}
    </location>
  </doc>
  );
 
 xdmp:document-insert(
  "geo-box-2.xml",
  <doc>
    <region-type>box</region-type>
    <src>Koh Phi Phi</src>
    <creation-date>{ xs:date("2017-04-02") }</creation-date>
    <location>
    {fn:string(cts:box(
    7.7175806, 
    98.7558714, 
    7.7877235, 
    98.7923348
    ))}
    </location>
  </doc>
  );
  
(: check if docs have been ingested :)

fn:doc( "geo-south-east-asia-region.xml" );
fn:doc( "geo-box-1.xml" );
fn:doc( "geo-box-2.xml" );
