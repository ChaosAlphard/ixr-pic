module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [1, 'never'],
    'object-curly-spacing': [1, 'always'],
    'comma-spacing': 1,
    'no-trailing-spaces': 'warn',
    'keyword-spacing': 'off',
    'block-spacing': 0,
    'space-infix-ops': 0,
    'eol-last': 1,
    'no-unused-expressions': 0,
    'no-labels': 0,
    'no-multiple-empty-lines': 0,
    'quotes': 1
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
