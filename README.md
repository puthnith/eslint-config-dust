# @puthnith/eslint-config-dust

> The simplest ESLint configuration

Install [TypeScript](https://www.npmjs.com/package/typescript), [ESLint](https://www.npmjs.com/package/eslint) and [this](https://www.npmjs.com/package/@puthnith/eslint-config-dust) packages

```
npm i --save-dev typescript eslint @puthnith/eslint-config-dust
```

And extend it in your `.eslintrc.json`

```json
{ "extends": "@puthnith/dust" }
```

## Visual Studio Code

Install [microsoft/vscode-eslint](https://github.com/Microsoft/vscode-eslint) and [prettier/prettier-vscode](https://github.com/prettier/prettier-vscode) extensions

This can be set globally or in your project `./.vscode/settings.json`

```json
{
  "javascript.format.enable": false,
  "typescript.format.enable": false,

  "eslint.enable": true,

  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "prettier.eslintIntegration": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": ["javascript", { "language": "typescript", "autoFix": true }]
}
```

## Tips

If you just want `eslint` and `prettier` extensions to work without any `.eslintrc.*` in your project, add this to the global `settings.json`.

(You don't need this _eslint_config_)

```json
{
  "eslint.options": {
    "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module"
    },
    "env": {
      "es6": true
    }
  }
}
```
