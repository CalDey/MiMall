module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrgin: true,
                pathRewrite: {
                    '/api':''
                }
            }
        }
    },
    // 关闭eslint
    // lintOnSave: false

    // 根目录
    // publicPath: '/app',
    // 输出项目目录
    // outputDir: 'dist',
    // 默认index文件路径名称
    // indexPath: 'demo.html'
    // 禁用SourceMap
    productionSourceMap: false,
    // 删除预加载
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}