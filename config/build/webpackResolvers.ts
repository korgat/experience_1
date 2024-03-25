import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildWebpackResolvers(buildOptions: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': buildOptions.paths.src,
    },
  };
}
