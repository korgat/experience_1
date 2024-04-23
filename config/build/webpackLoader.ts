import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';
import { type BuildOptions } from './types/config';

export function buildWebpackLoader(buildOptions: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            buildOptions.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: buildOptions.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
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
    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    return [imageLoader, svgLoader, babelLoader, typescriptLoader, styleLoader];
}
