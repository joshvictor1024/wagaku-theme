#### 0.4.2

- Tweak theme
  - Change color of Markdown fenced block to LILAC to be consistent with inline strings
  - Change some textmate scopes
  - Add color for `of` operator of javascript
- Add source for lint test
- Restructured README
  - Move screenshot to top
  - Change some wording
  - Add images for comparing modifications
- Cleanup `extension.js`

#### 0.4.1

- Restructure repo directories
  - Fix `README.md` build steps
  - Exclude `.vscode/` from gitignore to include `launch.json`
- Add `devDependencies` to `package.json`

#### 0.4.0

- Add custom configuration to change syntax color for `Operator` and `Overloaded Operator`

#### 0.3.1

- Fix some `editorOverviewRuler` color

#### 0.3.0

- Fix `name` field of file `themes/wagaku-midnight-color-theme.json`
- Deprecate color LIGHT_OLIVE; use BONE for all punctuation and operators by default
- Deprecate color ORANGE; use AQUA as find/match color (temporarily, may change)
- Change GIT_DELETED to OLIVE, making "remove" color of `diffEditor` consistent with "deleted" color of `gitDecoration`
- Add `gitDecoration` conflict color
- Add `merge` conflict color
- Add `editorOverviewRuler` color

#### 0.2.4

- Change color of Markdown heading: now only the `#` are YELLOW, consistent with setext headers
- Change color of Markdown fenced block language to YELLOW to keep palette clean; AQUA had no semantic meaning anyways
- Add Markdown separator, bold text, italic text color and style
- Add C++ `sizeof` `alignof` `alignas` color
- Add JavaScript `typeof` `in` color
- Add scope "Parameter". Currently has the same color as "Source" (no effect)
- Separate scope "Punctuation" and "Operator". Currently share the same color (no effect)

#### 0.2.3

- Correct color of enum member as function default argument
- Add editor widget colors, peek view colors
- Tweak editor gray element colors
- Boost color LILAC, RED_1

#### 0.2.2

- Improved Python, Markdown support
- Dim menu border color
- Boost indent guide color
- Fix folded code color

#### 0.2.1

- Add git colors, diff colors
- Tweak transparency

#### 0.2.0

- Add script for building
- Old `Wagaku Dusk` and `Wagaku Midnight` deprecated
- New `Wagaku Midnight` adapted from old `Wagaku Dusk`

#### 0.1.0

- Initial version