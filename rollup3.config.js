import resolve from "@rollup/plugin-node-resolve";

const packageJson = require("./package.json");

export default {
  input: "src/main.js",
  makeAbsoluteExternalsRelative: true,
  preserveEntrySignatures: "strict",
  treeshake: true,
  plugins: [resolve()],
};
