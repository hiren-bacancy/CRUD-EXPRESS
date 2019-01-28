const express = require('express');
const Student = require('../models/student.model');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.get('/',(req,res)=>{
    Student.find({},function(err,student){
        if (err) return next(err);
        res.send(student);
    })
})

router.post('/create', student_controller.student_create);

router.get('/:email', function (req, res) {
    Student.findOne({ email : req.params.email }, function (err, student) {
        if (err) return next(err);
        res.send(student);
    })
});

router.put('/:email/update', function (req, res) {
    Student.findOneAndUpdate({ email : req.params.email }, {$set: req.body}, function (err, student) {
        if (err) return next(err);
        res.send('Student udpated.');
    });
});

router.delete('/:email/delete', function (req, res) {
    Student.findOneAndRemove({ email : req.params.email}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
});

module.exports = router;
