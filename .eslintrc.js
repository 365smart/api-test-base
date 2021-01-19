// http://eslint.org/docs/user-guide/getting-started
// http://eslint.org/docs/user-guide/configuring
module.exports = {

  // yarn add eslint @babel/core @babel/eslint-parser -D
  // https://www.npmjs.com/package/@babel/eslint-parser
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },

  env: {
    es6: true,
    node: true,
    jest: true
  },

  extends: "eslint:recommended",

  // yarn add @babel/eslint-plugin -D
  // https://www.npmjs.com/package/@babel/eslint-plugin
  plugins: ["@babel"],

  globals: {
    __DEV__: true
  },

  // http://eslint.org/docs/rules/
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "single"],
    semi: ["warn", "always"],

    // https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
    "@babel/new-cap": "error",
    "@babel/no-invalid-this": "error",
    "@babel/no-unused-expressions": "error",
    "@babel/object-curly-spacing": "error",
    "@babel/semi": "error"

    // custom
    "no-unused-vars": "warn",
  }
};
