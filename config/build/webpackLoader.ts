import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildWebpackLoader(buildOptions: IBuildOptions): webpack.RuleSetRule[] {
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      buildOptions.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: buildOptions.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [typescriptLoader, styleLoader];
}
