const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,//去掉打包后js文件夹中的map文件
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave:false,
  // 配置代理跨域
  devServer:{
    proxy:{
      "/api":{
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  }
})
