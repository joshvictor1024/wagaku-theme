const existsSync = require("fs").existsSync;
const execSync = require("child_process").execSync;

if (existsSync("vsix") == false) execSync("mkdir vsix");
execSync("vsce package --yarn --out ../vsix/", {cwd: "./dist"});