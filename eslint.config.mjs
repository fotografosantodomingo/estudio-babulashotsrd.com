import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", "out/**", "workers/**", "node_modules/**"],
  },
];

export default eslintConfig;
