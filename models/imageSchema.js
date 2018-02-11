const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    size: Number
});

module.exports = mongoose.model('Images', imageSchema);