module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: [],
  rules: {
    // base
    'no-empty-source': null,

    // for WindiCSS
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,

    // for vue
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
};
