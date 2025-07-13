import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
     baseDirectory: __dirname,
     recommendedConfig: { ...js.configs.recommended },
});

export default [
     ...compat.extends("next/core-web-vitals"),
     {
          rules: {
               "@typescript-eslint/no-unused-vars": "warn",
               "react/no-unescaped-entities": "warn",
               "@typescript-eslint/no-explicit-any": "warn",
               "react-hooks/exhaustive-deps": "warn",
               "@next/next/no-img-element": "warn",
          },
     },
];
