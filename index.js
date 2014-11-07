var Transform = require('stream').Transform;
var inherits = require('util').inherits;

module.exports = Offset;
inherits(Offset, Transform);

function Offset(off){
  if (!(this instanceof Offset)) return new Offset(off);
  Transform.call(this, { objectMode: true });
  this._i = 0;
  this._offset = off;
}

Offset.prototype._transform = function(chunk, _, done){
  ++this._i > this._offset
    ? done(null, chunk)
    : done();
};
