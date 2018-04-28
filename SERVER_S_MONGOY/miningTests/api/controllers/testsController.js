'use strict';

var mongoose = require('mongoose'),
  Test = mongoose.model('Test');

exports.list_all_tests = function(req, res) {
  Test.find({}, function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};


exports.create_a_test = function(req, res) {
  var new_test = new Test(req.body);
  new_test.save(function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};


exports.read_a_test = function(req, res) {
  Test.findById(req.params.testId, function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};


exports.update_a_test = function(req, res) {
  Test.findOneAndUpdate({_id: req.params.testId}, req.body, {new: true}, function(err, test) {
    if (err)
      res.send(err);
    res.json(test);
  });
};


exports.delete_a_test = function(req, res) {
  Test.remove({
    _id: req.params.testId
  }, function(err, test) {
    if (err)
      res.send(err);
    res.json({ message: 'Test successfully deleted' });
  });
};