'use strict';

const Schema = use('Schema');

class ShowSchema extends Schema {

  up() {
    this.create('shows', (table) => {
      table.increments();
      table.string('title');
      table.integer('ep_time');
      table.integer('num_ep');
      table.boolean('is_movie');

      table.integer('user_id');

      table.timestamps();
    });
  }

  down() {
    this.drop('shows');
  }

}

module.exports = ShowSchema;
