module.exports = {
  extends: ['airbnb-base', 'prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
  },
};
