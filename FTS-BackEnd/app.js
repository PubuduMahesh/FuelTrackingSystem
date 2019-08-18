const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');

const db = mongoose.connect('mongodb://localhost/fuelAPI');
const app = express();
const port = process.env.port || 3000;
const fuelRouter = express.Router();
const Fuel = require('./models/fuelModel');
var returnFuelArray = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api',fuelRouter);

fuelRouter.route('/fuel-read')
  .get((req,res)=>{
    Fuel.find({}, { _id: 0 } ,function(err,fuel){
      if(err){
        return res.send(err);
      }
      return res.json(fuel);
    }).sort({price:1});
  });

  fuelRouter.route('/fuel-write')
  .post((req,res) => {
    const fuel = new Fuel(req.body);
    fuel.save(function(err,response){
      if(err)
      {
        return res.send(error);
      }
      return res.send(response);
    });
  });
app.get('/',(req,res)=>{
    res.send('Welcome to my API');
});

fuelRouter.route('/fuel-delete')
  .get((req,res)=>{
    var myquery = { price: 3500 };
    Fuel.deleteOne(myquery ,function(err,fuel){
      if(err){
        return res.send(err);
      }
      console.log("success");
      return res.send("success");
    });
  });

app.get('/',(req,res)=>{
    res.send('Welcome to my API');
});

app.listen(port,()=>{
  console.log(`Running on port: ${port}`)
});