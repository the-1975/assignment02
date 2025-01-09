module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
  ],
  env: {
      node: true,
      es2020: true,
      jest: true
  },
  rules: {
    'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
};
