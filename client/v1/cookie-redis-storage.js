var util = require('util');

var RedisCookieStore = require('tough-cookie-redis');
var CookieStorage = require('./cookie-storage');
var CONSTANTS = require("./constants");

function CookieRedisStorage(id, options) {
  if (!options) {
    options = {
      port: 6379,
      host: '127.0.0.1'
    };
  }

  const store = new RedisCookieStore(`instagramcookie:${id}`, options);

  CookieStorage.call(this, store);
}

util.inherits(CookieRedisStorage, CookieStorage);
module.exports = CookieRedisStorage;
