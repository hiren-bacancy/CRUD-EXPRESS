const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Student = require('./routes/student.route');

const app = express();
let url = 'mongodb://localhost:27017/Student';
let port = 3000;

let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/student', Student);

app.listen(port,()=>{
	console.log('Server is running on port no: '+port);
});
