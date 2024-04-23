import path from 'path';
import buildWebpackConfiguration from './config/build/webpackConfiguration';
import {
    type BuildOptions, type BuildPath, type WebpackEnv, type BuildMode,
} from './config/build/types/config';

const config = (env: WebpackEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;

    const buildOptions: BuildOptions = {
        mode,
        paths,
        isDev,
        port,
    };

    return buildWebpackConfiguration(buildOptions);
};

export default config;
