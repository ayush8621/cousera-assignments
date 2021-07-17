const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

//////////////When dishes route is called////////////////////////////////////////////////////////////////////////

app.route("/dishes")
  .get(function(req, res) {
    res.send("will send details of all dishes");
  })
  .post(function(req, res) {
    res.send("Will post all the details");
  })
  .put(function(req, res) {
    res.send("will update details of all the dishes");
  })
  .delete(function(req, res) {
    res.send("will delete all the dishes");
  });


////////////////When promotions route is called////////////////////////////////////////////////////////////////////////

app.route("/promotions")
  .get(function(req, res) {
    res.send("will send details of all promotions");
  })

  .post(function(req, res) {
    res.send("Will post all the details");
  })
  .put(function(req, res) {
    res.send("will update details of all the promotions");
  })
  .delete(function(req, res) {
    res.send("will delete all the promotions");
  });

//////////////////////When leaders route is called////////////////////////////////////////////////////////////////////////

app.route("/leaders")
  .get(function(req, res) {
    res.send("will send details of all leader");
  })

  .post(function(req, res) {
    res.send("Will post all the details");
  })
  .put(function(req, res) {
    res.send("will update details of all the leaders");
  })
  .delete(function(req, res) {
    res.send("will delete all the leaders");
  });



app.listen(3000, function(req, res) {
  console.log("server is running on port 3000")
});
