const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addLessLoader, addPostcssPlugins, fixBabelImports
} = require("customize-cra");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// 热跟新
const hotLoader = () => (config, env) => {
  config = rewireReactHotLoader(config, env)
  return config
}
// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = __dirname + '../dist/demo/';
    config.output.publicPath = './demo';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    )
  }
  return config;
}
// 跨域配置
//   const devServerConfig = () => config => {
//     return {
//       ...config,
//       // 服务开启gzip
//       compress: true,
//       proxy: {
//         '/api': {
//           target: 'xxx',
//           changeOrigin: true,
//           pathRewrite: {
//             '^/api': '/api',
//           },
//         }
//       }
//     }
//   }
const proxyApi = {
  proxy: [{
    context: ['/auth', '/api'],
    target: 'http://39.100.12.109',
    changeOrigin: true,
  }]

}



module.exports = {
  webpack: override(
    // disableEsLint()
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
      // style: true,
    }),
    addLessLoader(),
    //   addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: { '@primary-color': '#1DA57A' },
    //     localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    // }),
    // addPostcssPlugins([require('postcss-pxtorem')({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })]), 移动端将px像素转成rem
    addCustomize(),
    //   addWebpackPlugin(
    //     new LodashWebpackPlugin({       
    //     collections: true,       
    //     paths: true    
    //     }),
    //    ),
    hotLoader(),
  ),
  // devServer: overrideDevServer(
  //     // watchAll()
  //     devServerConfig()
  // )
  devServer: configFunction => (proxy, allowedHost) => {
    // proxy = process.env.NODE_ENV === 'development' ? proxyApi : null
    proxy = proxyApi;
    // allowedHost： 添加额外的地址
    const config = configFunction(proxy, allowedHost)
    return config
  }

};