import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import { globalIgnores, defineConfig } from 'eslint/config';

export default defineConfig(
  [
    globalIgnores([
      '**/*.gen.ts',
      '*.config.{js,mjs,ts}',
      '**/.next',
      '*sitemap.{js,mjs,ts}',
      '**/*.d.ts',
      '**/*.txt',
    ]),
  ],
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
      eslintConfigPrettier,
    ],
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'no-implicit-coercion': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-relative-import-paths/no-relative-import-paths': 'error',
      ...reactHooks.configs.recommended.rules,
      'react-hooks/set-state-in-effect': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
