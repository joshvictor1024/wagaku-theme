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

To build from source, clone this repository and run under root directory `node src/build.js` (using Node.js)

## Colors

Wagaku features warm and rather high contrast colors, which may help with blue-light cutting, use with low screen brightness or unavoidable screen glare.

- UI: Neutral colors with a splash of red
- Editor: No gazillion semantic colors, just four:
  - Aqua: Language keywords and constants
  - Yellow: Functions
  - Mandarin: Types and classes
  - Lilac: strings and literals

### Syntax Color for Operators

If you prefer colored operators over them being a neutral color, you can modify them directly in the file `theme/wagaku-midnight-color-theme.json` e.g. to give overloaded operators the same color as functions:

```json
{
    "name": "Overloaded Operator",
    "scope": [
        "entity.name.function.operator",
    ],
    "settings":
    {
        "foreground": "#E2C200" // by default "#E5D7D8" same as foreground color of "Source"
    }
},
```

Overloaded and non-overloaded operators correspond to scope names `Overloaded Operator` and `Operator` respectively.

## Language

Theme Wagaku began as (and probably will remain to be in the near future) a side project mainly for my own C++ programming. If you'd like other language covered, PR's are welcome though the current code base isn't in particularlly good shape.

## Credits

### Original Art

This theme is inspired by the album art of Yoen Waso Emaki (妖艶和奏絵巻)

- [album official site](https://avex.jp/yoen/)
- [album art original artist (pixiv)](https://www.pixiv.net/users/708358)