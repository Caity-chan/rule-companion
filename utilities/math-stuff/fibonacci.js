//const { fibonacci } = require(`${__dirname}/../utilities/math-stuff/fibonacci.js`);
module.exports = {
  fibonacci(na, nb, seconds, channel, client) {
    function F(nc, nd, secs) {
      setTimeout(function() {
        val = na + nb;
        na = nb;
        nb = val;
        client.channels.cache.get(channel).send(val);
        F(na, nb, seconds);
      }, seconds * 1000);
    }
    F(na, nb, seconds);
  }
}
