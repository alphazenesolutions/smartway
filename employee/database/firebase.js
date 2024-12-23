var admin = require("firebase-admin");
var serviceAccount = require("./greenpay-in-firebase-adminsdk-1p9go-417e229854.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports=admin
