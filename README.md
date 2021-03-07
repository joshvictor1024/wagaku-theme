# Theme Wagaku

A minimally colorful theme with an oriental twist. If you enjoy Monokai, give Wagaku a try!

## Screenshots

- Font: [Hack](https://sourcefoundry.org/hack/) 13px
- Platform: Windows 10 (125% display scaling)
- Icon Theme: [Chalice Icon Theme](https://marketplace.visualstudio.com/items?itemName=artlaman.chalice-icon-theme)

#### C++

![cpp.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/cpp.png "C++")

#### Python

![py.png](https://raw.githubusercontent.com/joshvictor1024/wagaku-theme/master/screenshot/py.png "Python")

## Build

To build from source, clone this repository and run under root directory `node script/build.js` and `node script/package.js`, which outputs a `vsix` package under `vsix/`.

## Colors

Wagaku features warm and rather high contrast colors, which may help with blue-light cutting, use with low screen brightness or unavoidable screen glare.

- UI: Neutral colors with a splash of red
- Editor: No gazillion semantic colors, just four:
  - Aqua: Language keywords and control statements
  - Yellow: Functions
  - Mandarin: Types and classes
  - Lilac: Strings and literals

## Modifications

There are custom configurations in `Settings` for overriding colors provided by the theme.

|Name in `Settings`|Scope|Options|
|---|---|---|
|`Theme Wagaku: Operator Color`|(non-overloaded) operators|`Punctuation` (default): Punctuations and regular source code<br>`Keyword`: Language keywords and control statements<br>`Function`: Functions|
|`Theme Wagaku: Overloaded Operator Color`|overloaded operators|(same as above)|

### Manual Modifications

The configurations basically modifies the `settings.json` file for you. If you want modifications other than those provided, you can always edit `settings.json` directly. Copy the corresponding section from `theme/wagaku-midnight-color-theme.json` to `settings.json` and edit those as desired. e.g. to change the color of overloaded operators to magenta (`#ff00ff`):

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
                    "foreground": "#FF00FF" // Change color to magenta
                }
            }
        ]
    }
},
```

## Language

Theme Wagaku began as (and probably will remain to be in the near future) a side project mainly for my own C++ programming. If you'd like other language covered, PR's are welcome though the current code base isn't in particularlly good shape.

## Credits

### Original Art

This theme is inspired by the album art of Yoen Waso Emaki (妖艶和奏絵巻)

- [album official site](https://avex.jp/yoen/)
- [album art original artist (pixiv)](https://www.pixiv.net/users/708358)