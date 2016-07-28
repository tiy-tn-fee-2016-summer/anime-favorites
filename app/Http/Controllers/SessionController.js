'use strict';

class SessionController {

  * create(request, response) {
    yield response.sendView('session.create');
  }

  * store(request, response) {
    // Grab user input
    const { email, password } = request.all();

    try {
      // Try to login the user
      yield request.auth.attempt(email, password);

      // Send success message
      yield request.with({ success: 'You are logged in!' })
        // Make message and input last only one request
        .flash();

      // Redirect to login
      response.redirect('/shows');
    } catch (e) {
      // Send back old input
      yield request.withAll()
      // Send error message
      .andWith({ error: 'The email and password do not match!' })
      // Make message and input last only one request
      .flash();

      // Redirect back
      response.redirect('back');
    }
  }

  * destroy(request, response) {
    yield request.auth.logout();

    // Send success message
    yield request
    .with({ success: 'You are logged out!' })
    // Make message and input last only one request
    .flash();

    // Redirect back
    response.redirect('/login');
  }

}

module.exports = SessionController;
