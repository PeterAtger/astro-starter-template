module.exports = {
  overrides: [
  {
      files: ["*.astro", "**/*.astro"],
      extends: [
        "plugin:astro/recommended",
        "airbnb-base",
        "airbnb-typescript/base",
      ],
      parser: "astro-eslint-parser",
      rules: {
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "@atger/eslint-config/base.js",
      ],
      rules: {
      },
      parser: "@typescript-eslint/parser",
    },
  ],
  parserOptions: {
    "project": "./tsconfig.json"
  },
}