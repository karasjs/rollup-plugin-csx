var yurine = require('yurine');

module.exports = function() {
  return {
    name: 'karas',
    renderChunk: function(code) {
      return yurine.parse(code);
    },
  };
};
