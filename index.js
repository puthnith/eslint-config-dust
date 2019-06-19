module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
  plugins: ["prettier", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  rules: {
    "simple-import-sort/sort": "error",
    "prettier/prettier": [
      2,
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
      },
    ],
  },
};
