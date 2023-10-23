module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import',
  ],
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true} ],
    'no-param-reassign': ["error", { "props": false }],
    'no-unused-expressions': ["error", { "allowTernary": true }]
  },
  // Newly added property
  parserOptions: {
    "ecmaVersion": 2020,
  },
}
