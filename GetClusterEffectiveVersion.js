// query
var admin = require("/MarkLogic/admin");
var configuration = admin.getConfiguration();

admin.clusterGetEffectiveVersion(configuration);
