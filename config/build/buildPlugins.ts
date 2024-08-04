import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import type {IBuildOptions} from "./types";

export const buildPlugins = ({paths}: IBuildOptions): webpack.WebpackPluginInstance[] => [
    new HTMLWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
];
