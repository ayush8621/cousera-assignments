const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.route("/leaders/:leaderid")
  .get(function(req, res) {
      res.send("will get the details of" + req.params.leaderid)
  })
  .post(function(req, res) {
      res.send("will post the details of" + req.params.leaderid)
  })
  .put(function(req, res) {
      res.send("will update the details of" + req.params.leaderid)
  })
  .delete(function(req, res) {
      res.send("will delete the details of" + req.params.leaderid)
  });






app.listen(3000, function(req, res) {
  console.log("server is running on port 3000");
});
