module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'off',
    'space-before-function-paren': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'arrow-parens': [2, 'as-needed'],
    'max-len': [2, {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: 'd=\'([\\s\\S]*)\'',
    }],
    semi: [2, 'never'],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
  },
}
