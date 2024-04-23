import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildWebpackDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        historyApiFallback: true,
    };
}
