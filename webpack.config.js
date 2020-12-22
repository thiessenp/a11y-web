// may not be needed
const path = require('path');

module.exports = {
    entry: {
        // Source file (main) path to bundle.
        //
        // -Could also- define as individual objects (chunks)
        // main...
        // keynav: path.resolve(__dirname, "src/keynav.js"),
        // hotkeys: path.resolve(__dirname, "src/hotkeys.js"),
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js',
        
        // Var/Module default name lib exposed as.
        // DEBUG: WK suddenly missing sub modules? Try update name, build, undo build
        library: 'A11yWeb',

        // umd = Works with CommonJS and ES Modules
        libraryTarget: 'umd',

        // Note: bellow may not be needed but may help
        // libraryExport: 'default',       
        // umdNamedDefine: true
    },
    // Externalize these dependencies to reduce bundle size
    externals: {
        // Debugging: Didn't help
        // 'keynav-web': {
        //     commonjs: 'keynav-web',
        //     commonjs2: 'keynav-web',
        //     umd: 'keynav-web'
        // },
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
	module: {
        // Processors
        rules: [
            // Run Babel for any JS files (exluding node_modules)
            {
                test: /\.(js)$/,
                
                // Debuggint: commenting out gives the same error, diff path
                exclude: /node_modules/,
                
                // Debugging: didn't help
                //include: /node_modules\/keynav-web\/src/,
                
                use: "babel-loader",
            },
            // Images
            //   {
            //     test: /.png$/,
            //     use: 'base64-image-loader'
            //   },
            // CSS
            //   {
            //     test: /.css$/,
            //     use: 'css-content-loader'
            //   }
            // Many others
        ]
    },
    // Development to allow viewing the source
    // IMPORTANT: build step should compress with `--mode=production`
    mode: "development", 
};