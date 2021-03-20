/**
 *  Adapted from https://github.com/material-theme/vsc-material-theme/tree/master/src
 *  See https://github.com/material-theme/vsc-material-theme/blob/master/LICENSE
 */

const vscode = require("vscode")

// TODO: directly read from package.json
const DEFAULT_VALUE = {
    "operatorColor" : "Punctuation",
    "overloadedOperatorColor" : "Punctuation",
};

// TODO: directly read from package.json
const THEME_SCOPE_NAME = {
    "operatorColor" : "Operator",
    "overloadedOperatorColor" : "Overloaded Operator",
};

/**
 * Get the color Hex string corresponding to `configName`.
 * 
 * On invalid `configName`, returns undefined
 * On invalid config value of the setting, returns default value
 * 
 * @param {string} configName - specified in package.json
 * e.g. for "themeWagaku.operatorColor" configName is "operatorColor"
 */
// TODO: directly read from package.json
function getColorHexString(configName) {    
    let settingValue = vscode.workspace.getConfiguration("themeWagaku").get(configName);
    if (settingValue === undefined)
        return undefined;
    
    const COLOR = {
        "Punctuation": "#E5D7D8",
        "Keyword": "#69D4E2",
        "Function": "#E2C200",
    };
    if ((settingValue in COLOR) === false) {
        return COLOR[DEFAULT_VALUE[configName]];
    }
    return COLOR[settingValue];
}

/**
 * Add non-existing or Update existing item in "editor.tokenColorCustomizations"
 * 
 * @param {string} configName - specified in package.json
 * e.g. for "themeWagaku.operatorColor" configName is "operatorColor"
 * @param {string} color - color hex string
 */
// known issue: both config show up even if only one is set
function setConfig(configName, color) {
    try {
        // get current config, type WorkspaceConfiguration
        const currentTokenColor = vscode.workspace.getConfiguration().get("editor.tokenColorCustomizations");
        const currentTokenColorTextmate = vscode.workspace.getConfiguration().get("editor.tokenColorCustomizations.[Wagaku Midnight].textMateRules");
        
        // convert part into type Array, perform modifications
        modifiedTokenColorTextmate = ((textmateConfig) => {
            let textmateConfigAsArray = Object.assign([], textmateConfig); // explicitly convert to an Array

            let hasScope = false;
            for (let item of textmateConfigAsArray) {
                if (item["name"] === THEME_SCOPE_NAME[configName]) {
                    hasScope = true;
                    item["settings"]["foreground"] = color;
                }
            }
            if (hasScope === false) {
                const ITEM = {
                    "operatorColor": {
                        ["name"]: THEME_SCOPE_NAME["operatorColor"],
                        ["scope"]: Object.assign([], ["keyword.operator"]),
                        ["settings"]: Object.assign({}, {["foreground"]: color}),
                    },
                    "overloadedOperatorColor": {
                        ["name"]: THEME_SCOPE_NAME["overloadedOperatorColor"],
                        ["scope"]: Object.assign([], ["entity.name.function.operator"]),
                        ["settings"]: Object.assign({}, {["foreground"]: color}),
                    },
                };
                textmateConfigAsArray.push(Object.assign({}, ITEM[configName]));
            }

            return textmateConfigAsArray;
        })(currentTokenColorTextmate);

        // write modified part back to WorkspaceConfiguration object
        newTokenColor = Object.assign(
            Object.assign(
                {}, currentTokenColor
            ), {
                [`[Wagaku Midnight]`]: Object.assign(
                    {}, {
                        ["textMateRules"]: Object.assign(
                            [], [
                                ...modifiedTokenColorTextmate
                            ]
                        )
                    }
                )
            }
        );
        // update config with new WorkspaceConfiguration object
        vscode.workspace.getConfiguration().update("editor.tokenColorCustomizations", newTokenColor, true);
    } catch (error) {
        vscode.window.showErrorMessage(error.message);
    }
}

function activate(context) {
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration("themeWagaku.operatorColor")) {
            setConfig("operatorColor", getColorHexString("operatorColor"))
        }
        if (event.affectsConfiguration("themeWagaku.overloadedOperatorColor")) {
            setConfig("overloadedOperatorColor", getColorHexString("overloadedOperatorColor"))
        }
    });
}
exports.activate = activate;