// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/api' : '/',
	outputDir: 'pro-fe',
	// 放置生成的静态资源 (js、css、img、fonts) 的目录
	assetsDir: 'static',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	indexPath: 'index.html',
	/***
	 * filenameHashing
	 *
	 * Type: boolean
	 * Default: true
	 * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
	 * 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
	 * 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
	 */

	filenameHashing: true,

	/**
	 * pages
	 *
	 * Type: Object
	 * Default: undefined
	 * 在 multi-page（多页）模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
	 *
	 *
	 * 其值应该是一个对象，对象的 key 是入口的名字，value 是：
	 * 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；或一个指定其 entry 的字符串。
	 */
	pages: {
		index: {
			// 入口文件
			entry: 'src/index/main.html',
			// 模板文件
			template: 'public/index.html',
			// 在dist文件中输出的文件
			filename: 'index.html',
			// template中的 title 标签需要是 <title> <%-htmlWebpackPlugin.option.title %></title>
			title: 'Index Page',
			// 提取出来的通用 chunks 和 vendor  chunks
			chunks: ['chunk-venders', 'chunk-common', 'index']
		}
	},

	/**
	 * lintOnSave
	 * Type: boolean | 'error'
	 * Default: true
	 * 是否在保存的时候使用 `eslint-loader` 进行检查。 有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
	 */
	lintOnSave: true,
	/**
	 * runtimeCompiler
	 * Type: boolean | 'error'
	 * Default: true
	 * 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
	 */
	runtimeCompiler: true,
	/**
	 * transpileDependencies
	 * Type: Array<string | RegExp>
	 * Default: []
	 * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
	 */
	transpileDependencies: [],
	/**
	 * productionSourceMap
	 * Type: boolean
	 * Default: true
	 * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	 */
	productionSourceMap: false,
	/**
	 * crossorigin
	 * Type: string
	 * Default: undefined
	 * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
	 */
	crossorigin: false,
	/**
	 * integrity
	 * Type: boolean
	 * Default: false
	 * 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
	 */
	integrity: false,
}
