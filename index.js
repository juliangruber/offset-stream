var through = require('through');

module.exports = offset;

function offset (off) {
  var i = 0;
  return through(function (chunk) {
    if (++i > off) this.queue(chunk);
  });
}
