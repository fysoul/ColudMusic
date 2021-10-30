
const path = require('path')
const px2rem = require("postcss-plugin-px2rem");
// const { config } = require('process')
function resolve(dir){
   return path.join(__dirname,dir)
}

module.exports={
    lintOnSave:false,//关闭语法检查
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('assets',resolve('./src/assets'))
        .set('common',resolve('./src/common'))
        .set('components',resolve('./src/components'))
        .set('network',resolve('./src/network'))
        .set('pages',resolve('./src/pages'))

    },

    css: {
        loaderOptions: {

            

            less: {
                // 属性值包裹在lessOptions内
                lessOptions: {
                    javascriptEnabled: true,
                    globalVars: {
                        primary: '#000'
                    }
                }
            },
            postcss: {
                plugins: [
                  px2rem({ // postcss-plugin-px2rem 默认配置
                    rootValue: 1, // 默认100
                    unitPrecision: 5,
                    propWhiteList: [],
                    propBlackList: [],
                    exclude: false,
                    selectorBlackList: [],
                    ignoreIdentifier: false,
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 0
                  })
                ]
            }



        }
    }
}