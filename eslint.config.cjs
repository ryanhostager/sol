module.exports = [
  // global ignores so Nx/ESLint don't try to lint build artifacts
  {
    ignores: ["node_modules/**", "**/dist/**", "coverage/**"],
  },

  // basic rules for JS/TS/React files (keeps config load-safe)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: (() => {
        try {
          return require("@typescript-eslint/parser");
        } catch {
          return undefined;
        }
      })(),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    // minimal ruleset so ESLint works without loading extra plugins
    rules: {
      // flag unused variables as errors
      "no-unused-vars": [
        "error",
        { "vars": "all", "args": "none", "ignoreRestSiblings": true }
      ],

      // warn on console.* (allow console.warn / console.error if you want)
      "no-console": ["warn", { "allow": ["warn", "error"] }],

      // automatic jsx runtime — don't require React in scope
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: { version: "detect" },
    },
  },
];