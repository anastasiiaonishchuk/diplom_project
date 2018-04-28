'use strict';
module.exports = function(app) {
  var test = require('../controllers/testsController');

  // todoList Routes
  app.route('/tests')
    .get(test.list_all_tests)
    .post(test.create_a_test);


  app.route('/tests/:testId')
    .get(test.read_a_test)
    .put(test.update_a_test)
    .delete(test.delete_a_test);
};