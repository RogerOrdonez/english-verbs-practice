module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // base rules
    "no-console": ["error", { allow: ["info", "error"] }],
    "class-methods-use-this": 0,
    "func-names": 0,
    "consistent-return": 0,
    "no-irregular-whitespace": [
      "error",
      { skipStrings: true, skipTemplates: true },
    ],
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,

    // import
    "import/no-unresolved": 0,
    "import/prefer-default-export": "off", // Allow single Named-export
    "import/extensions": 0,
    "import/no-named-default": 0,

    // typescript
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    // "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/ban-ts-comment": 0,

    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    // react
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ], // also want to use with ".tsx"
    "react/prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-one-expression-per-line": 0,
    "react/require-default-props": "off",
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": [1, "static public field"],
    "react/no-danger": 0,
    "react/display-name": 0,
    // not needed after React v17+
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-fragments": "off",

    // jsx-a11y
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
};
