const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    const processedCode = 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    return { code: processedCode };
  },
};
