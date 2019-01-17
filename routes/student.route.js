const express = require('express');
const Student = require('../models/student.model');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.post('/create', student_controller.student_create);

router.get('/:id', function (req, res) {
    Student.findById(req.params.id, function (err, student) {
        if (err) return next(err);
        res.send(student);
    })
});

router.put('/:id/update', function (req, res) {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
        if (err) return next(err);
        res.send('Student udpated.');
    });
});

router.delete('/:id/delete', function (req, res) {
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
});

module.exports = router;
