const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = (storybookBaseConfig, configType) => {
	const isDev = configType === 'DEVELOPMENT';

	storybookBaseConfig.devServer = {
		...storybookBaseConfig.devServer,
		open:true
	}

	storybookBaseConfig.module.rules.push(
		...[
			{
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							javascriptEnabled: true,
							minimize: false,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: { javascriptEnabled: true, sourceMap: true }
					},
					{
						loader: 'less-loader',
						options: { javascriptEnabled: true, sourceMap: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							javascriptEnabled: true,
							minimize: false,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: { javascriptEnabled: true, sourceMap: true }
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name][hash:8].[ext]' //遇到图片  生成一个images文件夹  名字.后缀的图片
						}
					}
				]
			},
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name][hash:8].[ext]'
						}
					}
				]
			}
		]
	);

	return storybookBaseConfig;
};
