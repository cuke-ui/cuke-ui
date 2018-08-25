const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = (storybookBaseConfig, configType) => {
  const isDev = configType === "DEVELOPMENT"


	storybookBaseConfig.module.rules.push(...[
		{
			test: /\.less$/,
			use:
				isDev
					? [
							{ loader: "style-loader" },
							{
								loader: "css-loader",
								options: {
									javascriptEnabled: true,
									minimize: false,
									sourceMap: true
								}
							},
							{
								loader: "postcss-loader",
								options: { javascriptEnabled: true, sourceMap: true }
							}, 
							{
								loader: "less-loader",
								options: { javascriptEnabled: true, sourceMap: true }
							}
					  ]
					: ExtractTextPlugin.extract({
							fallback: "style-loader",
							use: [
								"css-loader",
								{ loader: "postcss-loader", options: { sourceMap: false } },
								{
									loader: "less-loader",
									options: {
										sourceMap: false
									}
								}
							]
					  })
		},
		{
			test: /\.css$/,
			use: isDev
				? [
						{ loader: "style-loader" },
						{
							loader: "css-loader",
							options: {
								javascriptEnabled: true,
								minimize: false,
								sourceMap: true
							}
						},
						{
							loader: "postcss-loader",
							options: { javascriptEnabled: true, sourceMap: true }
						}
				  ]
				: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
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
				  })
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
		},
		{
			test: /\.(eot|ttf|svg|woff|woff2)$/,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "fonts/[name][hash:8].[ext]"
					}
				}
			]
		}
	]);

	return storybookBaseConfig;
};
