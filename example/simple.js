var offset = require('..');

process.stdin.pipe(offset(3)).pipe(process.stdout);
