export default {
  entry: 'src/index.js',
  disableCSSModules: true,
  publicPath: '',
  outputPath: './dist',
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr']
    }
  },
  extraBabelPlugins: [
    'transform-runtime',
    'dva-hmr',
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
  ]
}