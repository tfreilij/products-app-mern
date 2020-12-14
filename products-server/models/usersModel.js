const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
   userName: {
    type: String,
    required: true
 },
 password: {
    type: String,
    required: true
 }
});

const saltRounds = 2;

usersSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('users', usersSchema);