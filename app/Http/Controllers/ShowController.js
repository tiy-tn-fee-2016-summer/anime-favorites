'use strict';

class ShowController {

  * index(request, response) {
    yield response.sendView('show.index');
  }

  * create(request, response) {
    yield response.sendView('show.create');
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = ShowController;
