var chai = require('chai');



module.exports.libRequire = function(path){
  return require((process.env.LIB_FOR_TESTS_DIR || '../lib') + '/' + path);
};
