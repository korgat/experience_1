import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildWebpackPlugins({
  paths,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
    }),
  ];
}
