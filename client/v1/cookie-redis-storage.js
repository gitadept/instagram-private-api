var util = require('util');

var RedisCookieStore = require('redis-cookie-monster');
var CookieStorage = require('./cookie-storage');

function CookieRedisStorage(id, options) {
  if (!options)
    options = {
      port: 6379,
      host: '127.0.0.1'
    };

  CookieStorage.call(this, new RedisCookieStore(`instagramcookie:${id}`, options));
}

util.inherits(CookieRedisStorage, CookieStorage);
module.exports = CookieRedisStorage;
