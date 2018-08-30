/*
* @Author: LJW
* @Date:   2018-07-12 14:38:18
 * @Last Modified by: douya
 * @Last Modified time: 2018-08-30 15:02:36
*/
// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
const fs = require('fs')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
 const CopyWebpackPlugin = require('copy-webpack-plugin')

console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')
console.log(process.argv)
console.log('本地启动或构建的文件信息 | 结束--------------------------------------------------------------')
const assetsPath = function (_path) {
        return path.posix.join('static/', _path)
      }
//       // 添加全局 less 变量
const addStyleResource = function (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // path.resolve(__dirname, './src/styles/imports.styl'), 
        path.resolve(__dirname, './src/assets/css/common.less'),

      ],
    })
}



module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: process.env.NODE_ENV === 'production' ? '/css/' : '/',
    //  css打包ExtractTextPlugin  中的 publicPath   也用的这个路径  邪门！
    

    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

    outputDir: 'demo',
    // assetsDir:"assets",

    // pages:{ type:Object,Default:undfind } 
/*
  构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
  个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
  的字符串，
  注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
*/
    // pages: {
        // index: {
            // entry for the page
            // entry: 'src/index/main.js',
            // the source template
            // template: 'public/index.html',
            // output as dist/index.html
            // filename: 'index.html'
        // },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    // },

  configureWebpack: { // webpack配置，值位对象时会合并配置，为方法时会改写配置
      // plugins: [
      //   new CopyWebpackPlugin([
      //       {
      //         from: path.resolve(__dirname, './historicalLegacy'),
      //         to: path.resolve(__dirname, './dist'),
      //         ignore: ['.*']
      //       }
      //     ])
      // ]










      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
   
  },
  chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md


    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))



    if (debug) { // 开发环境配置
    
    } else { // 生产环境配置


console.error('qqqqqqqqqqqqqq')


        // 添加压缩图片 loader
      const imageRule = config.module.rule('images')
      imageRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
      })
      .end()

        
        

    }

                      



    // const eslintRule = config.module.rule('eslint')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // eslintRule.uses.clear()
 

 // path.resolve(__dirname, './../src/assets/css/common.less'),

  },
  css: { // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: { // css预设器配置项
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      stylus: {},
    //   less: {// 导入相关颜色资源
    //       data: `@import "@/assets/css/common.less";`
    //   }
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: { // 第三方插件配置
  },

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项

    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '^/api': {
                target: 'https://nwap-ts.jicai.com',
                ws: true,
                changeOrigin: true
            },
            // '/foo': {
            //     target: '<other_url>'
            // }
        },  // 配置多个代理
    }
}