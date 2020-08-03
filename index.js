var yurine = require('yurine');

module.exports = {
  name: 'karas',
  renderChunk: function(code) {
    return yurine.parse(code);
  },
};
