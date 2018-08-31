/**
 * @name UMD 模块 打包
 * @description 参考 dragon-ui
 * @description 这里选择  webpack 进行打包  rollup也可以
 * @description 输出目录 [dist]
 * @description 文件名 [cuke-ui]
 * CMD Node.js 环境
 * AMD 浏览器环境
 * UMD 两种环境都可以执行
 */

const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { version, name, description } = require("../package.json");

const config = {
	mode: "production",

	entry: {
		[name]: ["./components/index.js"]
	},

	//umd 模式打包
	output: {
		library: name,
		libraryTarget: "umd",
		umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
		path: path.join(process.cwd(), "dist"),
		filename: "[name].min.js"
	},
	//react 和 react-dom 不打包
	externals: {
		react: {
			root: "React",
			commonjs2: "react",
			commonjs: "react",
			amd: "react"
		},
		"react-dom": {
			root: "ReactDOM",
			commonjs2: "react-dom",
			commonjs: "react-dom",
			amd: "react-dom"
		}
	},
	resolve: {
		enforceExtension: false,
		extensions: [".js", ".jsx", ".json", ".less", ".css"]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: {
						warnings: false,
						drop_debugger: true,
						drop_console: false
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({
				//压缩css  与 ExtractTextPlugin 配合使用
				cssProcessor: require("cssnano"),
				cssProcessorOptions: { discardComments: { removeAll: true } }, //移除所有注释
				canPrint: true //是否向控制台打印消息
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: "/node_modules/",
				include: [path.resolve("components")]
			},
			{
				test: /\.(le|c)ss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					"css-loader",
					{
						loader: "postcss-loader",
						options: { sourceMap: false }
					},
					{
						loader: "less-loader",
						options: {
							sourceMap: false
						}
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name][hash:8].[ext]" //遇到图片  生成一个images文件夹  名字.后缀的图片
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].min.css"
		}),
		//在打包的文件之前 加上版权说明
		new webpack.BannerPlugin(`
    MIT License
  
    Copyright (c) 2018 ${name} version(${version})

    ${description}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
  
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
  `)
	]
};

module.exports = config;
