module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  extends: [
    // Airbnb style guide 적용
    "airbnb-base",
    // TypeScript ESLint recommanded style 적용
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier:prettier": [
      "error",
      {
        endOfLine: "lf",
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
        arrowParens: "always",
        parser: "babel",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        jsxSingleQuote: true,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict"
      }
    ]
  }
};
