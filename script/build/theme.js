const BONE = "#E5D7D8"//E5D7D8//eed6d7
const OLIVE = "#919985"//919985//94a17d
const LIGHT_OLIVE = "#D2D4CE"//D2D4CE//D7D9D3
const MANDARIN = "#ED755A"//ED755A//EE7C63//F46C4E//fe6543
const YELLOW = "#E2C200"
const AQUA = "#69D4E2"//69D4E2//5dc7d6
const LILAC = "#d1bae5"//c5abda
const RED_0 = "#960E27"//872130
const RED_1 = "#e21339"//b43144
const LIGHT_RED = "#FF94A4"//FF94A4//ff889a
const ORANGE = "#EA940B"//EA940B//9c4f07
const DARK_0 = "#161A11"//161B11//161a11
const DARK_1 = "#2B3022"//262A1E//26271E//1e211a
const DARK_2 = "#404533"//36382B//36342B//22251e
const LIGHT_0 = "#E0E2DF"//f0f0f0//b1a69b
const LIGHT_1 = "#FFFFFF"//e4dad1

const TRANSPARENCY = [
    "1B", "30", "68", "80", "B0",
]

const SCROLLBAR_PRESENT = TRANSPARENCY[2]
const SCROLLBAR_HOVER = TRANSPARENCY[3]
const SCROLLBAR_ACTIVE = TRANSPARENCY[4]
const DROP = TRANSPARENCY[3]
const GUTTER = TRANSPARENCY[4]
const MINOR_HIGHLIGHT = TRANSPARENCY[0]
const INACTIVE_HIGHLIGHT = TRANSPARENCY[3]
const ACTIVE_HIGHLIGHT = TRANSPARENCY[4]
const PEEK_HIGHLIGHT = TRANSPARENCY[0]
const DIFF_HIGHLIGHT = TRANSPARENCY[1]

const ACCENT = RED_0
const ACCENT_BRIGHT = RED_1
const BORDER = OLIVE
const ERROR = LIGHT_RED;
const SELECTION = RED_0;
const FIND_MATCH = AQUA
const GIT_ADDED = AQUA
const GIT_MODIFIED = YELLOW
const GIT_DELETED = OLIVE
const GIT_IGNORED = OLIVE
const GIT_CONFLICT = LILAC
const GIT_CURRENT = GIT_ADDED
const GIT_INCOMING = GIT_CONFLICT

const tokenColors = [
    {
        "name": "Source",
        "scope": [
            "source",
            "entity.name.function.call.initializer",// member name of class member initialization list
            "entity.name.type.parameter.cpp", // enum member as default argument
            "entity.name.scope-resolution", // namespace
            "variable",
            
            // markdown
            "meta.paragraph",
            "entity.name.section", // markdown heading
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Italic",
        "scope": [
            "markup.italic",
            "punctuation.definition.italic",
        ],
        "settings":
        {
            "foreground": BONE,
            "fontStyle": "italic",
        }
    },
    {
        "name": "Bold",
        "scope": [
            "markup.bold",
            "punctuation.definition.bold",
        ],
        "settings":
        {
            "foreground": BONE,
            "fontStyle": "bold",
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
        "name": "Punctuation",
        "scope": [
            "punctuation",
            "storage.modifier.pointer",// "*" of pointer
            "storage.modifier.reference",// "&" of reference

            // javascript
            "meta.brace",
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Operator",
        "scope": [
            "keyword.operator",
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Overloaded Operator",
        "scope": [
            "entity.name.function.operator",
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Parameter",
        "scope": [
            "variable.parameter",
        ],
        "settings":
        {
            "foreground": BONE
        }
    },
    {
        "name": "Keyword, Storage and Macro",
        "scope": [
            "keyword",
            "keyword.operator.cast",
            "keyword.operator.delete",
            "keyword.operator.new",
            "keyword.operator.sizeof",
            "keyword.operator.alignof",
            "keyword.operator.alignas",
            "constant.language",
            "variable.language.this",
            "entity.other.attribute",

            "storage",

            "meta.preprocessor",// "once" of "pragma once"
            "punctuation.definition.directive",// "#" of preprocessor directive
            "entity.name.function.preprocessor",//macro function

            // python
            "variable.language.special.self",
            "variable.parameter.function.language.special.self",

            // javascript
            "keyword.operator.expression.typeof",
            "keyword.operator.expression.in",
        ],
        "settings":
        {
            "foreground": AQUA
        }
    },
    {
        "name": "Type",
        "scope": [
            "entity.name.type",
            "support.type",
        ],
        "settings":
        {
            "foreground": MANDARIN
        }
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
            "constant.other", // e.g. "%d" of printf (constant.other.placeholder)
            "punctuation.definition.string",// "<>" of preprocessor directive

            // markdown
            "markup.inline.raw.string",
            "punctuation.definition.raw",//"`" of inline raw string
        ],
        "settings":
        {
            "foreground": LILAC
        }
    },
    {
        "name": "Python decorators",
        "scope": [
            "punctuation.definition.decorator",
        ],
        "settings":
        {
            "foreground": MANDARIN
        }
    },
    {
        "name": "Json Property",
        "scope": [
            "support.type.property-name",
            "punctuation.support.type.property-name" // quotes of json property
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Markdown Heading",
        "scope": [
            "punctuation.definition.heading", // "#" of markdown heading
            "markup.heading.setext", // "===" heading
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Markdown fenced block language",
        "scope": [
            "fenced_code.block.language"
        ],
        "settings":
        {
            "foreground": YELLOW
        }
    },
    {
        "name": "Markdown Separator",
        "scope": [
            "meta.separator"
        ],
        "settings":
        {
            "foreground": BONE
        }
    },

    // {"name":"Tag name","scope":"entity.name.tag","settings":{"fontStyle":"","foreground":"#225588"}},
    // {"name":"Tag attribute","scope":"entity.other.attribute-name","settings":{"fontStyle":"","foreground":"#ddbb88"}},
    // {"name":"Library constant","scope":"support.constant","settings":{"fontStyle":"","foreground":"#9966b8"}},
    // {"name":"Library class/type","scope":["support.type","support.class"],"settings":{"fontStyle":"italic","foreground":"#9966b8"}},
    // {"name":"Library variable","scope":"support.other.variable","settings":{"fontStyle":""}},
    // {"name":"Invalid","scope":"invalid","settings":{"fontStyle":"","foreground":"#F8F8F0"}},
    // {"name":"Invalid deprecated","scope":"invalid.deprecated","settings":{"foreground":"#F8F8F0"}},
    // {"name":"diff: header","scope":["meta.diff","meta.diff.header"],"settings":{"fontStyle":"italic","foreground":"#E0EDDD"}},
    // {"name":"diff: deleted","scope":"markup.deleted","settings":{"fontStyle":"","foreground":"#dc322f"}},
    // {"name":"diff: changed","scope":"markup.changed","settings":{"fontStyle":"","foreground":"#cb4b16"}},
    // {"name":"diff: inserted","scope":"markup.inserted","settings":{"foreground":"#219186"}},{"name":"Markup Quote","scope":"markup.quote","settings":{"foreground":"#22aa44"}},
]

const colors = {
    // "input.background":"#181f2f","inputOption.activeBorder":"#1D4A87","inputValidation.infoBorder":"#384078","inputValidation.infoBackground":"#051336","inputValidation.warningBackground":"#5B7E7A","inputValidation.warningBorder":"#5B7E7A","inputValidation.errorBackground":"#A22D44","inputValidation.errorBorder":"#AB395B","progressBar.background":"#0063a5","list.highlightForeground":"#0063a5","scrollbar.shadow":"#515E91AA","editorWidget.background":"#262641","editorMarkerNavigation.background":"#060621","editorMarkerNavigationError.background":"#AB395B","editorMarkerNavigationWarning.background":"#5B7E7A","editorLink.activeForeground":"#0063a5","peekViewEditor.matchHighlightBackground":"#eeeeee33","peekViewResult.matchHighlightBackground":"#eeeeee44","editorGroup.border":"#2b2b4a","editorGroupHeader.tabsBackground":"#1c1c2a","statusBarItem.remoteBackground":"#0063a5","statusBarItem.prominentBackground":"#0063a5","statusBarItem.prominentHoverBackground":"#0063a5dd","debugToolBar.background":"#051336","debugExceptionWidget.background":"#051336","debugExceptionWidget.border":"#AB395B","extensionButton.prominentBackground":"#5f8b3b","extensionButton.prominentHoverBackground":"#5f8b3bbb",

    // activity bar active icon
    // sidebar text and symbol
    // command palette text
    // terminal dropdown text
    // some other widget icons
    "foreground": LIGHT_0,
    "errorForeground": ERROR,
    "focusBorder": BORDER,
    "selection.background": SELECTION + ACTIVE_HIGHLIGHT,

    // Title bar
    "titleBar.activeBackground": ACCENT,
    "titleBar.activeForeground": LIGHT_0,

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
    "list.focusBackground": ACCENT,
    //"list.deemphasizedForeground": LIGHT_1,
    //"list.errorForeground": ERROR,

    // Context menu
    "menu.separatorBackground": BORDER,
    "menu.border": BORDER,

    // Command palette, etc.
    //"pickerGroup.border": "#ff66ff",
    "quickInput.background": DARK_0,
    "pickerGroup.foreground": LIGHT_0,

    // Above the editor
    "editorGroupHeader.tabsBackground": DARK_1,
    "editorGroupHeader.noTabsBackground": DARK_1,
    "tab.activeBackground": DARK_0,
    "tab.activeForeground": LIGHT_0,
    "tab.inactiveBackground": DARK_1,
    "tab.inactiveForeground": LIGHT_0,
    "tab.border": DARK_1,//1e211a
    //"breadcrumb.background":"#1f1c1c",
    //"breadcrumb.foreground":"#e0e0e0",

    // Editor
    "editorLineNumber.foreground": ACCENT,
    "editorLineNumber.activeForeground": ACCENT_BRIGHT,
    "editorGutter.addedBackground": GIT_ADDED + GUTTER,
    "editorGutter.modifiedBackground": GIT_MODIFIED + GUTTER,
    "editorGutter.deletedBackground": GIT_DELETED + GUTTER,

    "editorWhitespace.foreground": DARK_2,
    //"editor.lineHighlightBackground": DARK_1,
    "editor.lineHighlightBorder": DARK_1,

    "editor.background": DARK_0,
    "editorCursor.foreground": LIGHT_0,
    "editorBracketMatch.background": ACCENT + MINOR_HIGHLIGHT,
    "editorBracketMatch.border": ACCENT_BRIGHT,
    "editorGroup.border": DARK_1,
    "editorGroup.dropBackground": DARK_1 + DROP,
    "editorIndentGuide.background": DARK_2,
    "editorIndentGuide.activeBackground": BORDER,
    //"editorError.foreground": ERROR,

    "editor.hoverHighlightBackground": LIGHT_0 + MINOR_HIGHLIGHT,
    "editor.wordHighlightBackground": LIGHT_0 + MINOR_HIGHLIGHT, // read
    "editor.wordHighlightStrongBackground": LIGHT_0 + MINOR_HIGHLIGHT, // write
    "editor.selectionBackground": SELECTION + ACTIVE_HIGHLIGHT,
    "editor.selectionHighlightBackground": SELECTION + INACTIVE_HIGHLIGHT,
    "editor.findMatchBackground": FIND_MATCH + ACTIVE_HIGHLIGHT,
    "editor.findMatchHighlightBackground": FIND_MATCH + INACTIVE_HIGHLIGHT,
    "editor.foldBackground": LIGHT_0 + MINOR_HIGHLIGHT,

    "editorSuggestWidget.background": DARK_0,
    "editorSuggestWidget.border": BORDER,
    "editorSuggestWidget.foreground": LIGHT_0,
    "editorSuggestWidget.highlightForeground": ACCENT_BRIGHT,
    "editorSuggestWidget.selectedBackground": SELECTION + ACTIVE_HIGHLIGHT,

    "editorHoverWidget.background": DARK_0,
    "editorHoverWidget.statusBarBackground": DARK_0,
    "editorHoverWidget.border": BORDER,
    "editorHoverWidget.foreground": LIGHT_0,

    "peekView.border": ACCENT,
    "peekViewEditor.background": ACCENT + PEEK_HIGHLIGHT,
    "peekViewTitle.background": ACCENT + PEEK_HIGHLIGHT,
    "peekViewTitleLabel.foreground": LIGHT_0,
    "peekViewTitleDescription.foreground": LIGHT_0, // filepath
    "peekViewResult.background": DARK_0,
    "peekViewResult.selectionBackground": SELECTION + ACTIVE_HIGHLIGHT,

    "minimap.background": DARK_1,
    "minimapSlider.background": ACCENT + SCROLLBAR_HOVER,
    "minimapSlider.hoverBackground": ACCENT + SCROLLBAR_HOVER,
    "minimapSlider.activeBackground": ACCENT + SCROLLBAR_ACTIVE,
    "minimap.selectionHighlight": SELECTION + ACTIVE_HIGHLIGHT,
    "minimap.findMatchHighlight": FIND_MATCH + ACTIVE_HIGHLIGHT,
    //"minimap.errorHighlight": ERROR,
    "minimapGutter.addedBackground": GIT_ADDED + GUTTER,
    "minimapGutter.modifiedBackground": GIT_MODIFIED + GUTTER,
    //"minimapGutter.deletedBackground:": GIT_DELETED + GUTTER,

    "editorOverviewRuler.border": DARK_1, // vertical scrollbar border
    "editorOverviewRuler.findMatchForeground": FIND_MATCH + GUTTER,
    "editorOverviewRuler.rangeHighlightForeground": LIGHT_0 + GUTTER,
    "editorOverviewRuler.selectionHighlightForeground": SELECTION + GUTTER,
    "editorOverviewRuler.wordHighlightForeground": LIGHT_0 + GUTTER, // read
    "editorOverviewRuler.wordHighlightStrongForeground": LIGHT_0 + GUTTER, // write
    //"editorOverviewRuler.errorForeground": ERROR,
    "editorOverviewRuler.bracketMatchForeground": ACCENT_BRIGHT + GUTTER,

    "scrollbarSlider.background": ACCENT + SCROLLBAR_PRESENT,
    "scrollbarSlider.hoverBackground": ACCENT + SCROLLBAR_HOVER,
    "scrollbarSlider.activeBackground": ACCENT + SCROLLBAR_ACTIVE,

    "activityBar.background": DARK_0,
    "activityBar.activeBackground": DARK_1,
    "activityBar.inactiveForeground": ACCENT,
    "activityBar.foreground": ACCENT_BRIGHT,
    "activityBarBadge.background": ACCENT_BRIGHT,
    "activityBarBadge.foreground": LIGHT_1,
    //"activityBarBadge.foreground":"#71665c",
    //"activityBar.border": "#22251e",

    "sideBar.border": DARK_1,
    "sideBar.background": DARK_1,
    "sideBarSectionHeader.background": DARK_1,
    //"sideBarSectionHeader.foreground": "",
    "list.activeSelectionBackground": SELECTION + ACTIVE_HIGHLIGHT,
    "list.inactiveSelectionBackground": SELECTION + ACTIVE_HIGHLIGHT,

    // "n UNSAVED" badge of sideBarSectionHeader
    // "n Settings Found" badge of Settings (UI) search
    "badge.background": DARK_1,
    //"badge.foreground": LIGHT_0,

    // Panel
    "panel.border": DARK_1,
    "panel.background": DARK_1,

    // Terminal
    //"terminal.foreground": LIGHT_0,
    //"dropdown.foreground": LIGHT_0,
    "dropdown.background": DARK_0, // visible part when not expanded
    "dropdown.listBackground": DARK_0,

    // Status bar
    "statusBar.noFolderBackground": DARK_1,
    "statusBar.background": DARK_1,
    "statusBar.foreground": LIGHT_0,
    "statusBar.debuggingBackground": DARK_1,
    "statusBar.debuggingForeground": LIGHT_0,

    // Git
    "gitDecoration.untrackedResourceForeground": GIT_ADDED,
    "gitDecoration.addedResourceForeground": GIT_ADDED,
    "gitDecoration.modifiedResourceForeground": GIT_MODIFIED,
    "gitDecoration.stageModifiedResourceForeground": GIT_MODIFIED,
    "gitDecoration.deletedResourceForeground": GIT_DELETED,
    "gitDecoration.stageDeletedResourceForeground": GIT_DELETED,
    "gitDecoration.ignoredResourceForeground": GIT_IGNORED,
    "gitDecoration.conflictingResourceForeground": GIT_CONFLICT,

    "diffEditor.insertedTextBackground": GIT_ADDED + DIFF_HIGHLIGHT,
    "diffEditor.removedTextBackground": GIT_DELETED + DIFF_HIGHLIGHT,
    "diffEditor.diagonalFill": DARK_1,

    "merge.currentHeaderBackground": GIT_CURRENT + TRANSPARENCY[2],
    "merge.incomingHeaderBackground": GIT_INCOMING + TRANSPARENCY[2],
    "merge.currentContentBackground": GIT_CURRENT + DIFF_HIGHLIGHT,
    "merge.incomingContentBackground": GIT_INCOMING + DIFF_HIGHLIGHT,
    // "editorOverviewRuler.currentContentForeground": ,
    // "editorOverviewRuler.incomingContentForeground": ,

    // Settings
    "settings.modifiedItemIndicator": ACCENT,
}

const outFile = "dist/themes/wagaku-midnight-color-theme.json"
const all = {
    "name": "Wagaku Midnight",
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