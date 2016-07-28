'use strict';

class UserController {
  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    // Grab user input
    // Attempt to create a user

    // Send back old input
    yield request.withAll()
      // Send error message
      .andWith({ error: 'The user could not be created!' })
      // Make message and input last only one request
      .flash();

    // Redirect back
    response.redirect('back');
  }
}

module.exports = UserController;
