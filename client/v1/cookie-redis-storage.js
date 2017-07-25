var util = require('util');

var RedisCookieStore = require('redis-cookie-monster');
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

  this.getAllCookies = (cb) => {
    store.findCookies(CONSTANTS.HOSTNAME, '/', (err, cookies) => {
      if (err) return cb(err);

      cookies.sort(function(a, b) {
        return (a.creationIndex || 0) - (b.creationIndex || 0);
      });

      cb(null, cookies);
    });
  };

  CookieStorage.call(this, store);
}

util.inherits(CookieRedisStorage, CookieStorage);
module.exports = CookieRedisStorage;
