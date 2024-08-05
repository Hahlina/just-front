import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import type {IBuildOptions} from './types';

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
});

