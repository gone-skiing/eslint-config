module.export = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      //"extends": ["plugin:jest/recommended"]
      plugins: ['jest'],
      rules: {
        'jest/no-alias-methods': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-jest-import': 'warn',
        'jest/no-test-prefixes': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-describe': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
      },
    },
  ],
};
