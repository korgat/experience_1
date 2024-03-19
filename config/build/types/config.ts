export type TBuildMode = 'development' | 'production';

export interface IBuildPath {
  entry: string;
  output: string;
  html: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPath;
  isDev: boolean;
  port: number;
}

export interface IWebpackEnv {
  mode: 'production' | 'development';
  port: number;
}
