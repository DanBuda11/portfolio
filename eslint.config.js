import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/"],
  },

  {
    ...js.configs.recommended,

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
      },
    },

    rules: {
      ...js.configs.recommended.rules,

      "no-console": "off",

      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
    },
  },
];
