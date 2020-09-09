module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    extends: [
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: [],
    settings: {
      react: {
        version: 'detect'
      }
    },
    // add your custom rules here
    rules: {
        "react/prop-types": "off"
    }
}
