/** 
 * @name UMD 模块 打包
 * @description 参考 dragon-ui
 * @description 这里选择  webpack 进行打包  rollup也可以
 * @description 输出目录 [dist]
 * @description 文件名 [cuke-ui]
 * CMD Node.js 环境
 * AMD 浏览器环境 
 * UMD 两种环境都可以执行
 * TODO: 修复配置
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { version, name } = require('../package.json');

const config = {}
const env = process.env.NODE_ENV;

config.mode = 'development';
config.devtool = 'source-map';

config.entry = {
	[name]: ['./components/index.js']
};

//umd 模式打包
config.output = {
	library: name,
	libraryTarget: 'umd',
	path: path.join(process.cwd(), 'dist'),
	filename: '[name].js'
};

//react 和 react-dom 不打包
config.externals = {
	react: {
		root: 'React',
		commonjs2: 'react',
		commonjs: 'react',
		amd: 'react'
	},
	'react-dom': {
		root: 'ReactDOM',
		commonjs2: 'react-dom',
		commonjs: 'react-dom',
		amd: 'react-dom'
	}
};

const cssConfig = {
	filename: '[name].css'
};

if (env === 'production') {
	cssConfig.filename = '[name].min.css';
	config.mode = 'production';
	config.output.filename = '[name].min.js';
	config.optimization = {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					output: {
						comments: false
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	};
}

config.plugins = [
  new MiniCssExtractPlugin(cssConfig),
  //在打包的文件之前 加上版权说明
	new webpack.BannerPlugin(`
  MIT License

  Copyright (c) 2018 ${name} v${version}
  
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

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(env || 'production'),
		__DEBUG__: false
	})
);

module.exports = config;
