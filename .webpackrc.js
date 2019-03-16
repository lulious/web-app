const path = require('path');
export default{
  "entry": "src/index.js",
  "publicPath": "/",
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "externals": {},
  "ignoreMomentLocale": true,
  "hash": true,
  "alias": {
    "components": path.resolve(__dirname, "./src/components"),
    "img": path.resolve(__dirname, "./public/img")
  }
}
