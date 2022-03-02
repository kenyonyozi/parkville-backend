const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,   
    password: {
        type: String
    },
    confirmpassword: {
        type: String    
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User  = mongoose.model('User', userSchema , 'users')

module.exports = User;
