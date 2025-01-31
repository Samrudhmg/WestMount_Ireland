import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jestDom from 'eslint-plugin-jest-dom';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';

export default antfu(
  {
    react: true,
    lessOpinionated: true,
    isInEditor: false,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    typescript: {
      overrides: {
        // Add your specific TypeScript ESLint rules here
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
            prefix: ['is', 'has', 'should', 'can', 'did', 'will'],
            selector: 'variable',
            types: ['boolean'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],
      },
    },
    stylistic: {
      semi: true,
      quoteType: 'single',
    },

    formatters: {
      css: true,
      html: true,
      markdown: true,
    },

    // Ignore patterns
    ignores: [
      '**/dist',
      '**/*.json',
      '**/*.yaml',
      '**/*.md',
      '**/*.css',
      '**/.prettierrc',
      'src/components/ui/**/*',
      'src/components/ui/extended/**/*',
      'src/hooks/use-mobile.tsx',
      'src/hooks/use-toast.ts',
      'src/api',
      'migrations/**/*',
      'next-env.d.ts',
      'vitest-setup.ts',
      'vitest.config.ts',
      'sentry.client.config.ts',
    ],
  },
  {
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      ...tailwind.configs['flat/recommended'].rules,
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: [
      '**/*.test.ts?(x)',
    ],
    ...testingLibrary.configs['flat/react'],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: [
      '**/*.spec.ts',
      '**/*.e2e.ts',
    ],
    ...playwright.configs['flat/recommended'],
  },
  {
    rules: {
      // Preserve your custom rules
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles

      'unicorn/prevent-abbreviations': ['error', {
        allowList: {
          e2e: true,
          Env: true,
        },
        replacements: {
          props: false,
          ref: false,
          params: false,
        },
      }],
    },
  },
  // JavaScript-specific overrides
  {
    files: ['**/*.js'],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
);
