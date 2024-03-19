import { IBuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildWebpackDevServer({ port }: IBuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
