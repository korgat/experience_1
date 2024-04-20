import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildWebpackDevServer } from './webpackDevServer';
import { buildWebpackLoader } from './webpackLoader';
import { buildWebpackPlugins } from './webpackPlugins';
import { buildWebpackResolvers } from './webpackResolvers';

export default function buildWebpackConfiguration(
  buildOptions: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = buildOptions;

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
    resolve: buildWebpackResolvers(buildOptions),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(buildOptions) : undefined,
  };
}
