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
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error"
    ],
    "semi": [
      "error",
      "never"
    ],
    "camelcase": [
      2,
      {
        "properties": "always"
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": [
      2,
      6
    ],
    "curly": [
      2,
      "multi-line"
    ],
    "indent": 0,
    "max-len": [
      2,
      120,
      2
    ],
    "max-nested-callbacks": [
      2,
      10
    ],
    "max-params": [
      2,
      7
    ],
    "max-statements": [
      2,
      25
    ],
    "no-path-concat": 0,
    "no-unused-vars": [
      2,
      "all"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-before-function-paren": [
      2,
      "always"
    ]
  },
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
