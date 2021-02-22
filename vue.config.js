module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
      proxy: {
        '/api': {
          target: 'https://service.71jishu.com:8080', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    },
	configureWebpack: {
		externals: {
			'echarts': 'echarts', // 配置使用CDN
			"AMap": "AMap"
		}
	}
  }