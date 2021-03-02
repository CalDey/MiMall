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
}