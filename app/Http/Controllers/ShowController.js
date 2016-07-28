'use strict';

const Show = use('App/Model/Show');

class ShowController {

  * index(request, response) {
    const shows = yield Show.with('user').fetch();

    yield response.sendView('show.index', { shows: shows.toJSON() });
  }

  * create(request, response) {
    yield response.sendView('show.create');
  }

  * store(request, response) {
    const { is_movie, title, num_ep, ep_time } = request.all();

    yield request.authUser.shows()
      .create({ is_movie, title, num_ep, ep_time });

    yield request.with({ success: 'New show listed!' }).flash();

    response.redirect('/shows');
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
