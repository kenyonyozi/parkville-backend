const mongoose  = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    nin: String,   
    numberPlate: String,
    vehicleModel: String,
    gender: String,
    service: String,
    paid: Boolean,
    color: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Client  = mongoose.model('Client', clientSchema , 'clients')

module.exports = Client;
