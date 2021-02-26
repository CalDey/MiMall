module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://www.imooc.com',
                changeOrgin: true,
                pathRewrite: {
                    '/api':''
                }
            }
        }
    }
}