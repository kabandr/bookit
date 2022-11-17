module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    process: true,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
