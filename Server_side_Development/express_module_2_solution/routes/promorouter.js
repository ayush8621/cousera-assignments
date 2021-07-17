const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.route("/promotions/:promoname")
  .get(function(req, res) {
    res.send("will get the details of" + req.params.promoname)
  })
  .post(function(req, res) {
    res.send("will post the details of" + req.params.promoname)
  })
  .put(function(req, res) {
      res.send("will update the details of" + req.params.promoname)
  })
  .delete(function(req, res) {
      res.send("will delete the details of" + req.params.promoname)
  });
