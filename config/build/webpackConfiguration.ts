import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildWebpackDevServer } from './webpackDevServer';
import { buildWebpackLoader } from './webpackLoader';
import { buildWebpackPlugins } from './webpackPlugins';
import { buildWebpackResolvers } from './webpackResolvers';

export default function buildWebpackConfiguration(
  buildOptions: IBuildOptions,
): webpack.Configuration {
  const { paths, mode, port, isDev } = buildOptions;
  const fff: webpack.Configuration = {};
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildWebpackPlugins(buildOptions),
    module: {
      rules: buildWebpackLoader(buildOptions),
    },
    resolve: buildWebpackResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(buildOptions) : undefined,
  };
}
