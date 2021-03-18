/**
 *  Adapted from https://github.com/material-theme/vsc-material-theme/tree/master/src
 *  See https://github.com/material-theme/vsc-material-theme/blob/master/LICENSE
 */

const vscode = require("vscode")

/**
 * Get the color Hex string corresponding to @param config.
 * In case of invalid @param config, returns default ("Punctuation") value
 * @param {string} config - one of the possible config values in the configuration enum
 */
function getColorFromConfig(config) {
    const COLOR = {
        "Punctuation": "#E5D7D8",
        "Keyword": "#69D4E2",
        "Function": "#E2C200",
    };
    if ((config in COLOR) === false) {
        // vscode.window.showErrorMessage(`Invalid Setting ${config}.`);
        return COLOR["Punctuation"];
    }
    return COLOR[config];
}

/**
 * @param {Object} colors - A dictionary of { "textmateScopeName": "colorHexString"}
 */
function setEditorTokenTextmateColor(colors) {
    try {
        // get current config, type WorkspaceConfiguration
        const currentTokenColor = vscode.workspace.getConfiguration().get("editor.tokenColorCustomizations");
        const currentTokenColorTextmate = vscode.workspace.getConfiguration().get("editor.tokenColorCustomizations.[Wagaku Midnight].textMateRules");

        // convert part into type Array, perform modifications
        modifiedTokenColorTextmate = (function(config){
            var temp = Object.assign([], config); // explicitly convert to an Array

            var hasScope = {};
            for (const key in colors) {
                hasScope[key] = false;
            }

            for (var item of temp) {
                if (item.name in colors) {
                    hasScope[item.name] = true;
                    item.settings.foreground = colors[item.name];
                }
            }

            for (const key in hasScope) {
                if (hasScope[key] === false) {
                    if (key === "Operator") {                    
                        temp.push(Object.assign({},
                            {
                                ["name"]: key,
                                ["scope"]: Object.assign([], ["keyword.operator"]),
                                ["settings"]: Object.assign({}, {["foreground"]: colors[key]}),
                            }
                        ));
                    }
                    else if (key === "Overloaded Operator") {
                        temp.push(Object.assign({},
                            {
                                ["name"]: key,
                                ["scope"]: Object.assign([], ["entity.name.function.operator"]),
                                ["settings"]: Object.assign({}, {["foreground"]: colors[key]}),
                            }
                        ));
                    }
                }
            }
            return temp;
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

        // const currentConfig = vscode.workspace.getConfiguration().get('workbench.colorCustomizations');
        // config = Object.assign(
        //     Object.assign(
        //         {}, currentConfig
        //     ),
        //     {
        //         [`[Wagaku Midnight]`]: Object.assign(
        //             {}, {"foreground": "#ff00ff"}
        //         )
        //     }
        // );
        // vscode.workspace.getConfiguration().update('workbench.colorCustomizations', config, true);
    }
    catch (error) {
        vscode.window.showErrorMessage(error.message);
    }
}

function activate(context) {
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration("themeWagaku.operatorColor") || event.affectsConfiguration("themeWagaku.overloadedOperatorColor")) {
            
            var colors = Object.assign({}, {
                ["Operator"]: getColorFromConfig(vscode.workspace.getConfiguration("themeWagaku").get("operatorColor")),
                ["Overloaded Operator"]: getColorFromConfig(vscode.workspace.getConfiguration("themeWagaku").get("overloadedOperatorColor")),
            });
            setEditorTokenTextmateColor(colors);
        }
    });
}
exports.activate = activate;

// function deactivate() {}

// module.exports = {
//     activate,
//     deactivate
// }