/* eslint-disable no-magic-numbers */
/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:ssr-friendly/recommended",
        "plugin:react-prefer-function-component/recommended",
        "plugin:storybook/recommended",
        "prettier"
      ],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {argsIgnorePattern: "^_", varsIgnorePattern: "^_"}
        ],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          {allow: ["arrowFunctions"]}
        ],
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            ignore: [0, 1, -1, 2, 24, 60, 100, 1000],
            enforceConst: true,
            ignoreDefaultValues: true,
            ignoreClassFieldInitialValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreTypeIndexes: true
          }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {"ts-expect-error": "allow-with-description"}
        ],
        "react/prop-types": "off",
        "react/jsx-pascal-case": "error",
        "react/jsx-fragments": "error",
        "react/jsx-no-target-blank": "off",
        "react/jsx-no-useless-fragment": "error",
        "react/no-multi-comp": "error",
        "react/hook-use-state": "error",
        "react-hooks/exhaustive-deps": [
          "warn",
          {
            additionalHooks: "(useDeferCallback)"
          }
        ],
        "react/no-unstable-nested-components": [
          "error",
          {
            allowAsProps: true
          }
        ],
        "jsx-a11y/no-autofocus": [
          "error",
          {
            ignoreNonDOM: true
          }
        ]
      }
    },
    {
      files: [
        "**/test/**",
        "**/tests/**",
        "**/spec/**",
        "**/__tests__/**",
        "**/__stories__/**",
        "*.test.*",
        "*.spec.*",
        "*.story.*",
        "*.e2e.*",
        "*.e2e-spec.*"
      ],
      rules: {
        "@typescript-eslint/no-magic-numbers": "off"
      }
    },
    {
      files: ["*.js", "*.mjs", "*.cjs", "*.jsx"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"]
    },
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        "import/no-default-export": "off"
      }
    },
    {
      files: [
        "**/test/**",
        "**/tests/**",
        "**/spec/**",
        "**/__tests__/**",
        "**/__stories__/**",
        "*.test.*",
        "*.spec.*",
        "*.story.*",
        "*.e2e.*",
        "*.e2e-spec.*"
      ],
      rules: {
        "react/no-multi-comp": "off"
      }
    },
    {
      files: ["**/__stories__/**", "*.story.*"],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-anonymous-default-export": "off",
        "storybook/default-exports": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  ignorePatterns: ["*.d.ts"]
}
