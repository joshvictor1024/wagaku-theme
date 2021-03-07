const { existsSync } = require("fs");
const { execSync } = require("child_process");

if (existsSync("vsix") == false) execSync("mkdir vsix");
execSync("vsce package --yarn --out ../vsix/", {cwd: "./dist"});