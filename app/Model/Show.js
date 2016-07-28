'use strict';

const Lucid = use('Lucid');

class Show extends Lucid {

  user() {
    return this.belongsTo('App/Model/User');
  }

}

module.exports = Show;
