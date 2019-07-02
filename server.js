const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = require("./app/config/db.config.js");
  
// force: true will drop the table if it already exists
db.sequelize.sync({"force": true}).then(() => {
  // console.log("Drop and Resync with { force: true }");
});

require("./app/route/customer.route.js")(app);
 
// Create a Server
app.listen(8080, function () {
 
  // var host = server.address().address
  // var port = server.address().port
 
  // console.log("App listening at http://%s:%s", host, port)
});