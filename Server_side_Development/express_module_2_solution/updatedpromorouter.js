const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const promorouter = require('/routes/promorouter.js');
const leaderrouter = require('/routes/leaderrouter.js');

mongoose.connect('mongodb://localhost:27017/promoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const promoschema = new mongoose.Schema({
  name: "String",
  image: "String",
  label:"string",
  price:"String",
  description:"String",
  featured:Boolean
});

const Promo = mongoose.model("promo", promoschema);

///////////////////////////// Requests Targeting all articles /////////////////////////////////////////////////

app.route("/promotions")
  .get(function(req, res) {
    Promo.find(function(err, promos) {
      if (!err)
        res.send(result);
      else
        res.send(err);
    });
  })

  .post(function(req, res) {
    const promo = new Promo({
      name: req.body.name,
      image: req.body.image,
      label:req.body.label,
      price:req.body.price,
      description:req.body.description,
      featured:req.body.featured
    });
    promo.save(function(err) {
      if (!err) {
        res.send("Successful");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function(req, res) {
    Promo.deleteMany(function(err) {
      if (!err) {
        res.send("Successful");
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////// Requests Targeting specific article /////////////////////////////////////////////////

app.route("promotions/:promoname")
  .get(function(req, res) {
    Promo.findOne({
      name: req.params.promoname
    }, function(err, article) {
      if (!err)
        res.send(article);
      else
        res.send(err);
    });
  })

  .put(function(req, res) {
    Promo.update({
        name: req.params.promoname
      }, {
        name: req.body.name,
        image: req.body.image,
        label:req.body.label,
        price:req.body.price,
        description:req.body.description,
        featured:req.body.featured
      }, {
        overwrite: true
      },
      function(err) {
        if (!err) {
          res.send("Successful");
        } else {
          res.send(err);
        }

      });
  })

  .patch(function(req, res) {
      Promo.update({
          name: req.params.promoname
        }, {
          $set: req.body
        },
        function(err) {
          if (!err) {
            res.send("Successful");
          } else {
            res.send(err);
          }
        }
      );
    })

    .delete(function(req,res){
      Promo.deleteOne({name:req.params.name},function(err){
        if(!err){
          res.send("Successful");
        }
        else{
          res.send(err);
        }
      });
    });




app.listen(3000,function(req,res){
  console.log("server is running on port 3000");
});
