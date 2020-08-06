var yurine = require('yurine');
var MagicString = require( 'magic-string' );

module.exports = function() {
  return {
    name: 'karas',
    transform: function(code) {
      var s = new MagicString(code);
      var out = yurine.parse(code);
      s.overwrite(0, code.length, out.toString());
      return {
        code: s.toString(),
        map: s.generateMap({ hires: true })
      };
    },
  };
};
