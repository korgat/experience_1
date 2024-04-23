import type webpack from 'webpack';
import { type BuildOptions } from './types/config';

export function buildWebpackResolvers(buildOptions: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [buildOptions.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '@': buildOptions.paths.src,
        },
    };
}
