# @puthnith/eslint-config-dust

[![npm version](https://badge.fury.io/js/%40puthnith%2Feslint-config-dust.svg)](https://badge.fury.io/js/%40puthnith%2Feslint-config-dust)

> The simplest ESLint configuration integrated with Prettier

## Peer Dependencies

This package requires [`typescript`](https://www.npmjs.com/package/typescript) (`^3.x`) and [`eslint`](https://www.npmjs.com/package/eslint) (`^7.x`).

## Setup

1. Install this package and its dependencies

```
npm i --save-dev typescript eslint @puthnith/eslint-config-dust
```

2. Add it to your `.eslintrc.json` or `package.json`

```json
{ "extends": "@puthnith/dust" }
```

```json
{ "eslintConfig": { "extends": "@puthnith/dust" } }
```

### Vscode

If you use **vscode**, you may want to fix the code on save. This requires two extensions, [microsoft/vscode-eslint](https://github.com/Microsoft/vscode-eslint) and [prettier/prettier-vscode](https://github.com/prettier/prettier-vscode). After you have the extensions, you can add the below configuration to your global or local settings (`.vscode/settings.json`).

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

If you use `prettier`, you may want to config in the settings.

```json
{
  "prettier.printWidth": 120,
  "prettier.semi": false,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "all"
}
```

If you don't want to pollute your settings, you can add this to your project, `package.json` or `.prettierrc`.

```json
{
  "prettier": {
    "printWidth": 120,
    "semi": false,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "all"
  }
}
```

Check out [puthnith/hello-node](https://github.com/puthnith/hello-node) for a project template using this package.