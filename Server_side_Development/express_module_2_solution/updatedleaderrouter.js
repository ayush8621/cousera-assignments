const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const promorouter = require('/routes/promorouter.js');
const leaderrouter = require('/routes/leaderrouter.js');

mongoose.connect('mongodb://localhost:27017/leaderDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const leaderschema = new mongoose.Schema({
  name: String,
      image: String,
      designation: String,
      abbr: String,
      description: String,
      featured: Boolean
});

const Leader = mongoose.model("leader", leaderschema);

///////////////////////////// Requests Targeting all articles /////////////////////////////////////////////////

app.route("/leaders")
  .get(function(req, res) {
    Leader.find(function(err, promos) {
      if (!err)
        res.send(result);
      else
        res.send(err);
    });
  })

  .post(function(req, res) {
    const promo = new leader({
      name: req.body.name,
      image: req.body.image,
    designation:req.body.designation,
    abbr:req.body.abbr,
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
    Leader.deleteMany(function(err) {
      if (!err) {
        res.send("Successful");
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////// Requests Targeting specific article /////////////////////////////////////////////////

app.route("leaders/:leadername")
  .get(function(req, res) {
    Leader.findOne({
      name: req.params.leadername
    }, function(err, article) {
      if (!err)
        res.send(article);
      else
        res.send(err);
    });
  })

  .put(function(req, res) {
    Leader.update({
        name: req.params.leadername
      }, {
        name: req.body.name,
        image: req.body.image,
      designation:req.body.designation,
      abbr:req.body.abbr,
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
      Leader.update({
          name: req.params.leadername
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
      Leader.deleteOne({name:req.params.name},function(err){
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
