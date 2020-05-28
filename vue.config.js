const path = require("path");
const webpack = require('webpack')
module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    // webpack配置 - 简单配置方式
    configureWebpack: {
        resolve: {
            alias: {
                // 别名
                vue$: "vue/dist/vue.esm.js", //加上这一句
                "@api": path.resolve(__dirname, "./src/api"),
                "@utils": path.resolve(__dirname, "./src/utils")
            }
        },
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/api', // 需要请求的地址
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/'
                    }
                },
                '/public': {
                    target: 'http://localhost:3000/public', // 需要请求的地址
                    changeOrigin: true,
                    pathRewrite: {
                        '^/public': '/'
                    }
                }
            },
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })    
        ]
    },

}