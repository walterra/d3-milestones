const { execSync } = require('child_process');

const getBranch = () =>
  execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

module.exports = { getBranch };
