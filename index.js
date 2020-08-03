var yurine = require('yurine');

module.exports = function() {
  return {
    name: 'karas',
    transform: function(code) {
      return yurine.parse(code);
    },
  };
};
