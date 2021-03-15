const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527

const name = 'web-skill'

module.exports = {
	publicPath: '',
	outputDir: 'trutheye-fe',
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,
	devServer: {
		port: port,
		open: false,
		overlay: {
			warnings: false,
			errors: true
		}
		// proxy: {
		//   '/': {
		//     target: `http://192.168.2.150:8080`,
		// 允许跨域
		// changeOrigin: true,
		// ws: true,
		//   }
		// }
	},
	configureWebpack: {
		name: name,
		resolve: {
			alias: {
				'@': resolve('src'),
				_c: resolve('src/components')
			}
		}
	}
}
