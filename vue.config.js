const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const readConfigFile = filename => fs.readFileSync(path.join(__dirname, `./config/${filename}`), 'utf-8')
const resolve = dir => path.join(__dirname, dir)

const nodeEnv = process.env.NODE_ENV
const defaultConfig = yaml.safeLoad(readConfigFile('env.yaml'))

module.exports = {
  productionSourceMap: false,
  devServer: nodeEnv === 'production' ? defaultConfig.devServer : {},
  configureWebpack: {
    resolve: {
      alias: {
        'api': resolve('src/api'),
        'styles': resolve('src/styles'),
        'components': resolve('src/components'),
        'plugins': resolve('src/plugins'),
        'router': resolve('src/plugins'),
        'store': resolve('src/store'),
        'views': resolve('src/views'),
        'layout': resolve('src/layout'),
        'utils': resolve('src/utils'),
        'directives': resolve('src/directives')
      }
    },

  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()
    config.module
      .rule('svgs-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // 定义全局配置信息
    config.plugin('define')
      .tap(([opts = {}, ...args]) => {

        // 自定义项目全局环境变量配置数据
        opts.__VUE__ = {
          GLOBAL_CONFIG: JSON.stringify(defaultConfig),
          NODE_ENV: JSON.stringify(nodeEnv),
        }
        return [opts, ...args]
      })
      .end()
    config.plugin('html')
      .tap(([opts = {}, ...args]) => {
        opts.minify = nodeEnv === 'production'

        // html模版变量
        opts.templateParameters = {
          APP_NAME: defaultConfig.project.APPNAME, // pkg name 设置title
          CDN: defaultConfig.url,
          meta: defaultConfig.meta
        }
        return [opts, ...args]
      }).end()
    if (nodeEnv == 'production') {
      config.plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .tap(args => {
          let params = {
            analyzerPort: 8920
          }
          return [...args, params]
        })
        .end()
      config.plugin('terser-webpack-plugin')
        .use(require('terser-webpack-plugin'))
        .tap(args => {
          let params = {
            terserOptions: {
              parallel: true,
              compress: {
                pure_funcs: ['console.log'],
              },
              format: {
                comments: false,
              },
              extractComments: false,
            }
          }
          return [...args, params]
        })
        .end()
      config.plugin('compression-webpack-plugin')
      .use(require('compression-webpack-plugin'))
      .tap(args=>{
        let params = {
            algorithm: 'gzip',
            test: /\.(js|css)$/,// 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8 // 压缩比
        }
        return [...args, params]
      })
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './src/styles/*.scss'
      ]
    }
  }
}
