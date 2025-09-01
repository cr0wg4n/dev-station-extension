import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'unused-imports/no-unused-vars': 'warn',
    'no-console': 'warn',
    'perfectionist/sort-imports': 'off',
  },
  ignores: ['dist', 'node_modules'],
})
