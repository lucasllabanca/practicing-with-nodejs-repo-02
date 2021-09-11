const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registroSchema = new Schema({
    randomNumber: {
        type: String,
        required: true
    }    
});
module.exports = mongoose.model('Registro', registroSchema);