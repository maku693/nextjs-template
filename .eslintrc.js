module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:import/typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      env: {
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended", "plugin:jest-dom/recommended"],
      files: [
        "__tests__/**/*.ts",
        "__tests__/**/*.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    },
  ],
  root: true,
  rules: {
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/internal-regex": "^@/pages",
    react: {
      version: "detect",
    },
  },
};
