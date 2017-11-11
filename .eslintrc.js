// http://eslint.org/docs/user-guide/getting-started
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: "module"
  },
  plugins: ["babel"],
  globals: {
    __DEV__: true
  },

  // http://eslint.org/docs/rules/
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "single"],
    semi: ["warn", "always"],

    // https://github.com/babel/eslint-plugin-babel
    "generator-star-spacing": "warn",
    "object-shorthand": "warn",
    "arrow-parens": "off",
    "no-await-in-loop": "warn",

    "babel/new-cap": "off",
    "babel/object-curly-spacing": ["off", "never"],

    // custom
    "no-unused-vars": "warn",
  }
};