module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 140,
  bracketSpacing: true,
  semi: false,
  tabWidth: 2,
  jsxSingleQuote: false,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
