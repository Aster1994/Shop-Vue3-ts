/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'vue/multi-word-component-names': 'off'
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
