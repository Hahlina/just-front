import webpack from 'webpack';
import path from "path";

import {buildWebpackConfig, ModeEnum, type IBuildEnv, type TBuildMode, type IBuildPaths} from './config/build';

export default (env: IBuildEnv) => {

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: TBuildMode = env.mode || ModeEnum.Development;
    const isDev = mode === ModeEnum.Development;
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config;
};
