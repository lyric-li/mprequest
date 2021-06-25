module.exports = {
  "env": {
    "node": true,
    "es6": true,
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
  ],
  "globals": {
    "wx": true,
  },
  "rules": {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "space-before-function-paren": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
  },
};
