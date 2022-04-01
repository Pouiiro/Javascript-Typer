module.exports = {
  trailingComma: 'es5',
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.tsx',
      options: {
        semi: false,
      },
    },
  ],
};
