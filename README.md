## Screenshots

### C++

![cpp.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/cpp.png "C++")

### Python

![py.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/py.png "Python")

#### Environment

- Font: [Hack](https://sourcefoundry.org/hack/) 13px
- Platform: Windows 10 (125% display scaling)
- Icon Theme: [Chalice Icon Theme](https://marketplace.visualstudio.com/items?itemName=artlaman.chalice-icon-theme)

</br>
</br>

# Theme Wagaku

A minimally colorful theme with an oriental twist.

## Build

To build from source, clone this repository and run under root directory:

1. `node script/build.js`
2. `node script/package.js`

which outputs a `vsix` package under `vsix/`.

## Color

Wagaku features:
- Neutral/warm color scheme
- Moderate contrast
- Minimal semantic colors

and is designed for:
- blue-light cutting
- use with low screen brightness

## Modification

There are custom configurations in `Settings` for overriding colors provided by the theme.

### Operators

- `Theme Wagaku: Operator Color`: (Non-overloaded) operators
- `Theme Wagaku: Overloaded Operator Color`: Overloaded operators

Colored as punctuation:

![operator_1.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/modification/operator_1.png "Colored as punctuation")

Non-overloaded operators colored as keywords; Overloaded operators colored as functions (configurations are independent for the two):

![operator_2.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/modification/operator_2.png "Colored semantically")

### Manual Modification

The custom configurations modifies the `settings.json` file for you. For modifications other than those provided, you can always edit `settings.json` manually.

- To change the color of overloaded operators to magenta `#FF00FF`:

```json
// settings.json

"editor.tokenColorCustomizations": {
    "[Wagaku Midnight]": {            
        "textMateRules": [

            // Paste here

            {
                "name": "Overloaded Operator",
                "scope": [
                    "entity.name.function.operator"
                ],
                "settings": {
                    "foreground": "#FF00FF" // Desired color: magenta
                }
            }
        ]
    }
},
```
Refer to the [vscode docs](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) for more info, or select scopes from `theme/wagaku-midnight-color-theme.json`.

## Language

Theme Wagaku began as (and probably will remain to be in the near future) a side project mainly for my own C++ programming. Coverage for other languages is not a priority for me right now. Sorry about that.

## Copyright

### Code

Essential parts of this project is adapted from existing theme [Dracula](https://github.com/dracula/visual-studio-code) and [Material Theme](https://github.com/material-theme/vsc-material-theme). Those source files are headed with the appropriate notices.

### Original Art

This theme is inspired by the album art of Yoen Waso Emaki (妖艶和奏絵巻)

- [album official site](https://avex.jp/yoen/)
- [album art original artist (pixiv)](https://www.pixiv.net/users/708358)