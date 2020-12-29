# SASS Helpers

## Installation

```cli
npm install drifte-sass-helpers --save-dev
```

## Usage

Update sass `includePaths` to include `node_modules`, then add the following import to your scss files:

```sass
@import "drifte-sass-helpers/css";
```

Use single modules with

```sass
@import "drifte-sass-helpers/css/flex";
```

# VS Code Intellisense

Enable implicit autocomplete by installing [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) and adding the following setting to `settings.json`:

```json
  "scss.scannerExclude": [
    "**/.git",
    "**/node_modules/!(drifte-sass-helpers)",
    "**/bower_components"
  ]
```
