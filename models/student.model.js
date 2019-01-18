const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
	fname : { type : String , required : true },
	lname : { type : Number , required : true },
	email : { type : String , required : true },
	contact : { type : Number , required : true }
});

module.exports = mongoose.model('Student',StudentSchema);