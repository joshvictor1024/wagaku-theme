const execSync = require("child_process").execSync;

execSync("node script/build/theme.js");
execSync("uglifyjs src/extension.js -m -o dist/extension.js");