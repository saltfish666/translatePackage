module.exports = {
  "extends": [],
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info","log"]
    }],
    "indent": ["error", 3],
    "semi": ["error", "always"],
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "globals": {
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  }
};
