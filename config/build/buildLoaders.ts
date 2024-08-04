import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    //For Js - need babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            //Creates 'style' nodes from JS strings
            'style-loader',
            //Translate CSS into common JS
            'css-loader',
            //Compiles Sass to CSS
            'sass-loader',
        ]
    }

    //Loaders order is important
    return [
        typescriptLoader,
        cssLoader,
    ]
};
