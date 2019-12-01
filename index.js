module.exports = {
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
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'jest',
        'promise',
        'unicorn',
      ],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
      ],
      rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': [
          'error',
          {functions: false, classes: true, variables: true},
        ],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {allowExpressions: true, allowTypedFunctionExpressions: true},
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {functions: false, classes: true, variables: true, typedefs: true},
        ],
        // Common abbreviations are known and readable
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
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
