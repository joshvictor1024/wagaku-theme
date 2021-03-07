const { execSync } = require("child_process");
const { copyFileSync } = require("fs");

execSync("node script/build/theme.js");
execSync("uglifyjs src/extension.js -m -o dist/extension.js");
copyFileSync('README.md', 'dist/README.md');