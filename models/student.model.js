const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
	name : { type : String , required : true , max : 100 },
	std : { type : Number , required : true }
});

module.exports = mongoose.model('Student',StudentSchema);