module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "always"],          // obliga a usar punto y coma
    quotes: ["error", "double"],        // obliga comillas dobles
    indent: ["error", 2],               // indentación estándar de 2 espacios
    "no-unused-vars": "warn",           // avisar variables sin usar
    "vue/multi-word-component-names": "off",  // desactiva warning de nombres
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
