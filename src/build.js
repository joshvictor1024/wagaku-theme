const BONE = "#E5D7D8"//E5D7D8//eed6d7
const OLIVE = "#919985"//919985//94a17d
const LIGHT_OLIVE = "#D2D4CE"//D2D4CE//D7D9D3
const MANDARIN = "#ED755A"//ED755A//EE7C63//F46C4E//fe6543
const YELLOW = "#e2c200"
const AQUA = "#69D4E2"//69D4E2//5dc7d6
const LILAC = "#D5C2E5"//c5abda
const RED_0 = "#960E27"//872130
const RED_1 = "#CD1335"//b43144
const LIGHT_RED = "#FF94A4"//FF94A4//ff889a
const ORANGE = "#EA940B"//EA940B//9c4f07
const DARK_0 = "#161a11"//161B11//161a11
const DARK_1 = "#2B3022"//262A1E//26271E//1e211a
const DARK_2 = "#404533"//36382B//36342B//22251e
const LIGHT_0 = "#E0E2DF"//f0f0f0//b1a69b
const LIGHT_1 = "#ffffff"//e4dad1

const TRANSPARENCY = [
    "1b", "30", "68", "80", "b0",
]

const SCROLLBAR_PRESENT = TRANSPARENCY[2]
const SCROLLBAR_HOVER = TRANSPARENCY[3]
const SCROLLBAR_ACTIVE = TRANSPARENCY[4]
const DROP = TRANSPARENCY[3]
const GUTTER = TRANSPARENCY[4]
const MINOR_HIGHLIGHT = TRANSPARENCY[0]
const INACTIVE_HIGHLIGHT = TRANSPARENCY[3]
const ACTIVE_HIGHLIGHT = TRANSPARENCY[4]
const DIFF_HIGHLIGHT = TRANSPARENCY[1]

const ACCENT = RED_0
const ACCENT_BRIGHT = RED_1
const ERROR = LIGHT_RED;
const SELECTION = RED_0;
const FIND_MATCH = ORANGE
const GIT_ADDED = AQUA
const GIT_MODIFIED = YELLOW
const GIT_DELETED = LIGHT_RED
const GIT_IGNORED = OLIVE

const tokenColors = [
    {
        "name": "Source",
        "scope": [
            "source",
            "entity.name.function.call.initializer",// member name of class member initialization list
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Comment",
        "scope": [
            "comment",
            "punctuation.definition.comment"// "//" of comment
        ],
        "settings":
        {
            "foreground": OLIVE
        }
    },
    {
        "name": "Punctuation and Operator",
        "scope": [
            "punctuation",
            "keyword.operator",
            "entity.name.function.operator",//overloaded operator
            "storage.modifier.pointer",// "*" of pointer
            "storage.modifier.reference",// "&" of reference

            //js            
            "meta.brace",
        ],
        "settings":
        {
            "foreground": LIGHT_OLIVE
        }
    },
    {
        "name": "Keyword and Macro",
        "scope": [
            "keyword",
            "keyword.operator.cast",
            "keyword.operator.delete",
            "keyword.operator.new",
            "storage",
            "constant.language",
            "variable.language.this",
            "entity.other.attribute",

            "meta.preprocessor",// "once" of "pragma once"
            "punctuation.definition.directive",// "#" of preprocessor directive
            "entity.name.function.preprocessor"//macro function
        ],
        "settings":
        {
            "foreground": AQUA
        }
    },
    {
        "name": "Type: class and struct",
        "settings":
        {
            "foreground": MANDARIN
        },
        "scope": [
            "entity.name.type"
        ]
    },
    {
        "name": "Function",
        "scope": [
            "entity.name.function",
            "support.function",
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Literals",
        "scope": [
            "constant.numeric",
            "keyword.other.unit",
            "keyword.other.unit.suffix",
            "string",
            "constant.character",
            "constant.other.placeholder",//"%d" of printf
            "punctuation.definition.string"// "<>" of preprocessor directive
        ],
        "settings":
        {
            "foreground": LILAC
        }
    },
    {
        "name": "json Property",
        "scope": [
            "support.type",
            "punctuation.support.type"//quotes of json property
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Markdown Header",
        "scope": [
            "entity.name.section",
            "punctuation.definition.heading"
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Markdown List Punctuation",
        "scope": [
            "meta.paragraph"
        ],
        "settings":
        {
            "foreground": LILAC
        }
    },

    // {"name":"Built-in constant","scope":"constant.language","settings":{"foreground":"#f280d0"}},
    // {"name":"User-defined constant","scope":["constant.character","constant.other"],"settings":{"foreground":"#f280d0"}},
    // {"name":"Variable","scope":"variable","settings":{"fontStyle":""}},
    // {"name":"Storage","scope":"storage","settings":{"fontStyle":"","foreground":"#225588"}},
    // {"name":"Storage type","scope":"storage.type","settings":{"fontStyle":"italic","foreground":"#9966b8"}},
    // {"name":"Class name","scope":["entity.name.class","entity.name.type","entity.name.namespace","entity.name.scope-resolution"],"settings":{"fontStyle":"underline","foreground":"#ffeebb"}},
    // {"name":"Inherited class","scope":"entity.other.inherited-class","settings":{"fontStyle":"italic underline","foreground":"#ddbb88"}},
    // {"name":"Function name","scope":"entity.name.function","settings":{"fontStyle":"","foreground":"#ddbb88"}},
    // {"name":"Function argument","scope":"variable.parameter","settings":{"fontStyle":"italic","foreground":"#2277ff"}},
    // {"name":"Tag name","scope":"entity.name.tag","settings":{"fontStyle":"","foreground":"#225588"}},
    // {"name":"Tag attribute","scope":"entity.other.attribute-name","settings":{"fontStyle":"","foreground":"#ddbb88"}},
    // {"name":"Library function","scope":"support.function","settings":{"fontStyle":"","foreground":"#9966b8"}},
    // {"name":"Library constant","scope":"support.constant","settings":{"fontStyle":"","foreground":"#9966b8"}},
    // {"name":"Library class/type","scope":["support.type","support.class"],"settings":{"fontStyle":"italic","foreground":"#9966b8"}},
    // {"name":"Library variable","scope":"support.other.variable","settings":{"fontStyle":""}},
    // {"name":"Invalid","scope":"invalid","settings":{"fontStyle":"","foreground":"#F8F8F0"}},
    // {"name":"Invalid deprecated","scope":"invalid.deprecated","settings":{"foreground":"#F8F8F0"}},
    // {"name":"diff: header","scope":["meta.diff","meta.diff.header"],"settings":{"fontStyle":"italic","foreground":"#E0EDDD"}},
    // {"name":"diff: deleted","scope":"markup.deleted","settings":{"fontStyle":"","foreground":"#dc322f"}},
    // {"name":"diff: changed","scope":"markup.changed","settings":{"fontStyle":"","foreground":"#cb4b16"}},
    // {"name":"diff: inserted","scope":"markup.inserted","settings":{"foreground":"#219186"}},{"name":"Markup Quote","scope":"markup.quote","settings":{"foreground":"#22aa44"}},
    // {"name":"Markup Styling","scope":["markup.bold","markup.italic"],"settings":{"foreground":"#22aa44"}},
    // {"name":"Markup Inline","scope":"markup.inline.raw","settings":{"fontStyle":"","foreground":"#9966b8"}},
    // {"name":"Markup Setext Header","scope":"markup.heading.setext","settings":{"fontStyle":"","foreground":"#ddbb88"}}
]

const colors = {
    // "focusBorder":"#596F99","input.background":"#181f2f","inputOption.activeBorder":"#1D4A87","inputValidation.infoBorder":"#384078","inputValidation.infoBackground":"#051336","inputValidation.warningBackground":"#5B7E7A","inputValidation.warningBorder":"#5B7E7A","inputValidation.errorBackground":"#A22D44","inputValidation.errorBorder":"#AB395B","badge.background":"#0063a5","progressBar.background":"#0063a5","dropdown.background":"#181f2f","button.background":"#2B3C5D","list.activeSelectionBackground":"#08286b","list.focusBackground":"#08286b","list.hoverBackground":"#061940","list.inactiveSelectionBackground":"#152037","list.dropBackground":"#041D52","list.highlightForeground":"#0063a5","scrollbar.shadow":"#515E91AA","scrollbarSlider.activeBackground":"#3B3F5188","scrollbarSlider.background":"#1F2230AA","scrollbarSlider.hoverBackground":"#3B3F5188","editorWidget.background":"#262641","editorCursor.foreground":"#ddbb88","editorWhitespace.foreground":"#103050","editor.lineHighlightBackground":"#082050","editor.selectionBackground":"#770811","editorIndentGuide.background":"#002952","editorIndentGuide.activeBackground":"#204972","editorHoverWidget.background":"#000c38","editorHoverWidget.border":"#004c18","editorLineNumber.foreground":"#406385","editorLineNumber.activeForeground":"#80a2c2","editorMarkerNavigation.background":"#060621","editorMarkerNavigationError.background":"#AB395B","editorMarkerNavigationWarning.background":"#5B7E7A","editorLink.activeForeground":"#0063a5","editor.findMatchHighlightBackground":"#eeeeee44","peekViewResult.background":"#060621","peekViewEditor.background":"#10192c","peekViewTitle.background":"#10192c","peekView.border":"#2b2b4a","peekViewEditor.matchHighlightBackground":"#eeeeee33","peekViewResult.matchHighlightBackground":"#eeeeee44","diffEditor.insertedTextBackground":"#31958A55","diffEditor.removedTextBackground":"#892F4688","minimap.selectionHighlight":"#750000","titleBar.activeBackground":"#10192c","editorGroup.border":"#2b2b4a","editorGroup.dropBackground":"#25375daa","editorGroupHeader.tabsBackground":"#1c1c2a","tab.border":"#2b2b4a","tab.inactiveBackground":"#10192c","activityBar.background":"#051336","panel.border":"#2b2b4a","sideBar.background":"#060621","sideBarSectionHeader.background":"#10192c","statusBar.background":"#10192c","statusBar.noFolderBackground":"#10192c","statusBar.debuggingBackground":"#10192c","statusBarItem.remoteBackground":"#0063a5","statusBarItem.prominentBackground":"#0063a5","statusBarItem.prominentHoverBackground":"#0063a5dd","debugToolBar.background":"#051336","debugExceptionWidget.background":"#051336","debugExceptionWidget.border":"#AB395B","pickerGroup.border":"#596F99","pickerGroup.foreground":"#596F99","extensionButton.prominentBackground":"#5f8b3b","extensionButton.prominentHoverBackground":"#5f8b3bbb","terminal.ansiBlack":"#111111","terminal.ansiRed":"#ff9da4","terminal.ansiGreen":"#d1f1a9","terminal.ansiYellow":"#ffeead","terminal.ansiBlue":"#bbdaff","terminal.ansiMagenta":"#ebbbff","terminal.ansiCyan":"#99ffff","terminal.ansiWhite":"#cccccc","terminal.ansiBrightBlack":"#333333","terminal.ansiBrightRed":"#ff7882","terminal.ansiBrightGreen":"#b8f171","terminal.ansiBrightYellow":"#ffe580","terminal.ansiBrightBlue":"#80baff","terminal.ansiBrightMagenta":"#d778ff","terminal.ansiBrightCyan":"#78ffff","terminal.ansiBrightWhite":"#ffffff"

    // activity bar active icon
    // sidebar text and symbol
    // command palette text
    // terminal dropdown text
    // some other widget icons
    "foreground": LIGHT_0,
    "errorForeground": ERROR,

    "focusBorder": OLIVE,//GRAY_1,//6e6459//872130//ef0f30

    "selection.background": SELECTION + ACTIVE_HIGHLIGHT,

    // Title bar
    "titleBar.activeBackground": ACCENT,//5A1620//282b25//1e211a//22251e//181a15
    "titleBar.activeForeground": LIGHT_0,//b1a69b//8c7f72//9F9489//acacac

    // Button
    "button.background": ACCENT,
    //"button.foreground": Button foreground color.,
    //"button.hoverBackground": Button background color when hovering.,
    //"button.secondaryForeground": Secondary button foreground color.,
    //"button.secondaryBackground": Secondary button background color.,
    //"button.secondaryHoverBackground": Secondary button background color when hovering.,
    //"checkbox.background": Background color of checkbox widget.,
    //"checkbox.foreground": Foreground color of checkbox widget.,
    //"checkbox.border": Border color of checkbox widget,

    // All Dropdown lists: title bar, editor auto-complete, etc.
    "list.dropBackground": DARK_0 + DROP,
    "list.hoverBackground": ACCENT,
    "list.focusBackground": ACCENT,//872130
    //"list.deemphasizedForeground": LIGHT_1,//872130
    //"list.errorForeground": ERROR,

    // Context menu
    "menu.separatorBackground": OLIVE,
    "menu.border": LIGHT_0,

    // Command palette, etc.
    //"pickerGroup.border": "#ff66ff",
    "quickInput.background": DARK_0,
    "pickerGroup.foreground": LIGHT_0,

    // Above the editor
    "editorGroupHeader.tabsBackground": DARK_1,
    "editorGroupHeader.noTabsBackground": DARK_1,
    "tab.activeBackground": DARK_0,//161a11//22251e
    "tab.activeForeground": LIGHT_0,//e4dad1//b7b7b7//acacac   //light grey
    "tab.inactiveBackground": DARK_1,//1e211a//26231f//242424
    "tab.inactiveForeground": LIGHT_0,//b1a69b//9F9489//acacac
    "tab.border": DARK_1,//1e211a
    //"breadcrumb.background":"#1f1c1c",
    //"breadcrumb.foreground":"#e0e0e0",

    // Editor
    "editorLineNumber.foreground": ACCENT,//b43144//872130//a7a7a7    //brighter 872130
    "editorLineNumber.activeForeground": ACCENT_BRIGHT,
    "editorGutter.addedBackground": GIT_ADDED + GUTTER,
    "editorGutter.modifiedBackground": GIT_MODIFIED + GUTTER,
    "editorGutter.deletedBackground": GIT_DELETED + GUTTER,

    "editor.background": DARK_0,
    "editorCursor.foreground": LIGHT_0,
    "editorBracketMatch.background": ACCENT + MINOR_HIGHLIGHT,//RED_0,
    "editorBracketMatch.border": ACCENT_BRIGHT,
    "editorGroup.dropBackground": DARK_1 + DROP,
    "editorIndentGuide.background": DARK_2,       //indentation line//darker 9F9489
    "editorIndentGuide.activeBackground": OLIVE, //indentation line//darker 9F9489
    //"editorError.foreground": ERROR,

    "editor.wordHighlightBackground": LIGHT_0 + MINOR_HIGHLIGHT, // read
    "editor.wordHighlightStrongBackground": LIGHT_0 + MINOR_HIGHLIGHT, // write
    "editor.selectionBackground": SELECTION + ACTIVE_HIGHLIGHT,//8A001C
    "editor.selectionHighlightBackground": SELECTION + INACTIVE_HIGHLIGHT,//8A001C80
    "editor.findMatchBackground": FIND_MATCH + ACTIVE_HIGHLIGHT,//9C4F07
    "editor.findMatchHighlightBackground": FIND_MATCH + INACTIVE_HIGHLIGHT,//9C4F0780

    "minimap.background": DARK_1,
    "minimapSlider.background": ACCENT + SCROLLBAR_HOVER,
    "minimapSlider.hoverBackground": ACCENT + SCROLLBAR_HOVER,
    "minimapSlider.activeBackground": ACCENT + SCROLLBAR_ACTIVE,
    "minimap.selectionHighlight": SELECTION + ACTIVE_HIGHLIGHT,
    "minimap.findMatchHighlight": FIND_MATCH + ACTIVE_HIGHLIGHT,
    //"minimap.errorHighlight": ERROR,
    "minimapGutter.addedBackground": GIT_ADDED + GUTTER,
    "minimapGutter.modifiedBackground": GIT_MODIFIED + GUTTER,
    "minimapGutter.deletedBackground:": GIT_DELETED + GUTTER,

    "editorOverviewRuler.border": DARK_1,//1e211a//22251e//vertical scrollbar border
    //"editorOverviewRuler.errorForeground": ERROR,
    "scrollbarSlider.background": ACCENT + SCROLLBAR_PRESENT,//57151f//872130
    "scrollbarSlider.hoverBackground": ACCENT + SCROLLBAR_HOVER,//872130
    "scrollbarSlider.activeBackground": ACCENT + SCROLLBAR_ACTIVE,//872130
    //"editor.hoverHighlightBackground": DARK_0 + CLEARLY_VISIBLE,

    "activityBar.background": DARK_0,//161a11//282b25//22251e//181a15//1f1c1c
    "activityBar.activeBackground": DARK_1,//1e211a//282b25
    "activityBar.inactiveForeground": ACCENT,
    "activityBar.foreground": ACCENT_BRIGHT,//b43144//aa132a//ef0f30
    "activityBarBadge.background": ACCENT_BRIGHT,//b43144//5A1620
    "activityBarBadge.foreground": LIGHT_1,//e4dad1//b7b7b7//b1a69b//161a11//5dc7d6
    //"activityBarBadge.foreground":"#71665c",
    //"activityBar.border": "#22251e",

    "sideBar.border": DARK_1,
    "sideBar.background": DARK_1,//282b25//1e211a//191615
    //"sideBarTitle.foreground":"#872130",
    "sideBarSectionHeader.background": DARK_1,//1e211a//282b25//22251e//181a15//4d131c//87213080//313131
    //"sideBarSectionHeader.foreground":"",
    "list.activeSelectionBackground": SELECTION + ACTIVE_HIGHLIGHT,
    "list.inactiveSelectionBackground": SELECTION + ACTIVE_HIGHLIGHT,

    // "n UNSAVED" badge of sideBarSectionHeader
    // "n Settings Found" badge of Settings (UI) search
    "badge.background": DARK_1,//1e211a
    //"badge.foreground": GRAY_WARM,//9F9489//71665c

    // Panel
    "panel.border": DARK_1,
    "panel.background": DARK_1,//DARK_1,//1e211a//211f1f
    //"panel.foreground":"#00ffff",//84796C
    //"panelTitle.activeForeground": "#ff00ff",//LIGHT_0,//b1a69b//9F9489

    // Terminal
    //"terminal.foreground": LIGHT_0,//b1a69b//9F9489//918578//84796C
    //"dropdown.foreground": LIGHT_0,//e4dad1//b7b7b7//acacac
    "dropdown.background": DARK_0,    // visible part when not expanded//161a11//22251e//1e211a
    //"dropdown.listBackground": DARK_0,// expanded part//22251e

    // Status bar
    "statusBar.noFolderBackground": DARK_1,
    "statusBar.background": DARK_1,//1e211a//872130//181a15//080403
    "statusBar.foreground": LIGHT_0,//b1a69b//9F9489//f0f0f0
    "statusBar.debuggingBackground": LIGHT_0,
    "statusBar.debuggingForeground": DARK_1,

    // Git
    "gitDecoration.untrackedResourceForeground": GIT_ADDED,
    "gitDecoration.addedResourceForeground": GIT_ADDED,
    "gitDecoration.modifiedResourceForeground": GIT_MODIFIED,
    "gitDecoration.stageModifiedResourceForeground": GIT_MODIFIED,
    "gitDecoration.deletedResourceForeground": GIT_DELETED,
    "gitDecoration.stageDeletedResourceForeground": GIT_DELETED,
    "gitDecoration.ignoredResourceForeground": GIT_IGNORED,

    "diffEditor.insertedTextBackground": GIT_ADDED + DIFF_HIGHLIGHT,
    "diffEditor.removedTextBackground": GIT_DELETED + DIFF_HIGHLIGHT,
    "diffEditor.diagonalFill": DARK_1,

    // Settings
    "settings.modifiedItemIndicator": ACCENT,
}

const outFile = "themes/wagaku-midnight-color-theme.json"
const all = {
    "name": "Wagaku Test",
    "tokenColors": tokenColors,
    "colors": colors,
    "semanticHighlighting": false
}

fs = require('fs')
if (require.main === module) {
    fs.writeFile(
        outFile,
        JSON.stringify(all, null, "    "),
        function (err) {
            if (err) console.log(err)
        }
    )
}