const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
	fname : { type : String },
	lname : { type : String },
	email : { type : String },
	contact : { type : Number }
});

module.exports = mongoose.model('Student',StudentSchema);