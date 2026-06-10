import next from "eslint-config-next";

/**
 * Flat ESLint config. eslint-config-next (v16+) ships native flat-config arrays
 * — including core-web-vitals + TypeScript rules — so we spread it directly.
 */
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...next,
];

export default eslintConfig;
