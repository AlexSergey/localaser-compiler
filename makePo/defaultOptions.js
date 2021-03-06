const { babelOpts } = require('rocket-starter');
let { presets, plugins } = babelOpts();

let defaultOptions = {
    src: ['src'],
    dist: './po',
    variables: ['l', 'nl'],
    defaultLanguage: 'en',
    query: ['/**/!(*.spec|*.test).{js,jsx}', '!*node_modules*'],
    babelPresets: presets,
    babelPlugins: plugins,
    babelParserOptions: {
        allowImportExportEverywhere: true,
        allowSuperOutsideMethod: true,
        allowReturnOutsideFunction: true,
        plugins: [
            'jsx',
            'dynamicImport',
            'estree',
            'functionBind',
            'classProperties',
            'exportExtensions',
            'templateInvalidEscapes',
            'objectRestSpread'
        ]
    }
};

module.exports = defaultOptions;