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
    'keyword-spacing': 'off',
    'object-curly-spacing': [1, 'always'],
    'block-spacing': 0,
    'space-infix-ops': 0,
    'no-trailing-spaces': 'warn'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
