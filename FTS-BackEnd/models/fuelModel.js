const mongoose = require('mongoose');
const {Schema} = mongoose;
const fuelModel = new Schema(
    {
        price: {type:Number},
        milage: {type:Number},
    }
);

module.exports = mongoose.model('Fuel',fuelModel);