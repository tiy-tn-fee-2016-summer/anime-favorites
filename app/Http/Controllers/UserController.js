'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {
  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    // Grab user input
    const { email, password } = request.all();
    // Attempt to create a user
    try {
      yield User.create({ email, password: yield Hash.make(password) });

      // Send success message
      yield request.with({ success: 'User created!' })
      // Make message and input last only one request
      .flash();

      // Redirect to login
      response.redirect('/login');
    } catch (e) {
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
}

module.exports = UserController;
