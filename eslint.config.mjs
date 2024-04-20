import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...compat.extends('xo-typescript'),
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/consistent-type-definitions': 0,
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      '@typescript-eslint/no-floating-promises': 0,
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'variable',
          'format': ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],
      'react/no-deprecated': 0,
      '@typescript-eslint/promise-function-async': 0,
      '@typescript-eslint/consistent-indexed-object-style': 0,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
