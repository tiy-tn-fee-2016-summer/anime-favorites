'use strict';

const Lucid = use('Lucid');

class User extends Lucid {

  apiTokens() {
    return this.hasMany('App/Model/Token');
  }

  shows() {
    return this.hasMany('App/Model/Show');
  }

}

module.exports = User;
