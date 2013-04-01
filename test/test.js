var offset = require('..');
var test = require('tap').test;

test('offset', function (t) {
  var stream = offset(10)

  var chunks = [];
  stream.on('data', function (chunk) {
    chunks.push(chunk);
  });
  stream.on('end', function () {
    t.deepEqual(chunks, [
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ]);
    t.end();
  });

  for (var i = 0; i < 20; i++) {
    stream.write(i);
  }
  stream.end();
});

