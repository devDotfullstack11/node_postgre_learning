var express = require('express'),
  router = express.Router();
var http = require('http');
var request = require('request')
// const db = require("../models");

const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

router.post('/', function (req, res) {

  request.post(
    "https://www.zaubacorp.com/custom-search",
    {
      form:
        { search: req.body.keyword, filter: 'company' }
    },
    function (error, response, body) {
      var regex = new RegExp(/<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi);

      matches = body.match(regex);
      let companiesFinalData = [];
      let resArr = body.split("<div");
      if (matches.length > 0) {
        for (i = 0; i <= matches.length; i++) {
          if (matches[i]) {
            let regexID = new RegExp(/<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi);
            let FoundMatches = regexID.exec(matches[i]);
            if (typeof FoundMatches == 'object' && FoundMatches !== null) {
              companiesFinalData.push({ company_name: FoundMatches[3], cin: FoundMatches[2].split("/")[2] })
            }
          }
        }
      }
      // console.log("body =>",resArr);
      res.json(companiesFinalData);
    }
  );

});

router
  .post('/add', function (req, res) {
    // Validate request
    if (!req.body.company_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const tutorial = {
      name: req.body.company_name,
      cin: req.body.cin
    };
    // Save Tutorial in the database
    Product.create(tutorial)
      .then(data => {
        res.json({ status: 1, data: data, message: "Success!" });
      })
      .catch(err => {
        res.json({ status: 0, message: "Some Error Occured!" });
      });
  });

  router
  .post('/list', function (req, res) {
    // Validate request
    
    // Create a Tutorial
    //await User.findAll()
    // Save Tutorial in the database
    Product.findAll()
      .then(data => {
        res.json({ status: 1, results: data, message: "Success!" });
      })
      .catch(err => {
        res.json({ status: 0, message: "Some Error Occured!" });
      });
  })


module.exports = router;