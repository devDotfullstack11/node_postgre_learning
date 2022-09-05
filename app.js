const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3101;
var cors = require('cors')
app.use(cors())
//import { env } from 'node:process';

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


const products = require("./modules/products.js");
app.use("/products",products);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })