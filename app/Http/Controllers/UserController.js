'use strict';

class UserController {
  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {

  }
}

module.exports = UserController;
