import path from 'path';
import buildWebpackConfiguration from './config/build/webpackConfiguration';
import { IBuildOptions, IBuildPath, IWebpackEnv, TBuildMode } from './config/build/types/config';

const config = (env: IWebpackEnv) => {
  console.log(env.mode);

  const paths: IBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode: TBuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const buildOptions: IBuildOptions = {
    mode,
    paths,
    isDev,
    port,
  };

  return buildWebpackConfiguration(buildOptions);
};

export default config;
