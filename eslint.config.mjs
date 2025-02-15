import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import configPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    configPrettier,

    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },

    {
        plugins: {
            '@typescript-eslint': pluginTs,
            prettier: configPrettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                // Add Vite specific globals
                'import.meta': 'readonly',
            },
            ecmaVersion: 2024,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },

        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'keyword-spacing': ['error', { after: true }],
            semi: 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'vue/multi-word-component-names': 'off',
        },
    },

    {
        // Remove webpack service files reference since we're removing that directory
        files: ['.prettierrc.js', '.stylelintrc.js'],

        languageOptions: {
            globals: {
                ...globals.node,
            },
        },

        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },

    {
        ignores: ['dist'],
    },
];