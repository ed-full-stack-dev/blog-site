import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unicorn from 'eslint-plugin-unicorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { unicorn },
    rules: {},
  },
  {
    files: ["src/**/types/**/*.{ts,tsx}"],
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": ["error", { cases: { pascalCase: true } }],
    },
  },
  {
    files: ["src/**/hooks/**/*.{ts,tsx}"],
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": ["error", { cases: { camelCase: true } }],
    },
  },
  {
    files: ["src/**/components/**/*.{ts,tsx}"],
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": ["error", { cases: { pascalCase: true } }],
    },
  },
  {
    files: ["src/**/utils/**/*.{ts,tsx}"],
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": ["error", { cases: { kebabCase: true } }],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;