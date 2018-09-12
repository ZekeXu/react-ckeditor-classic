const path = require('path');
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const UglifyJsWebpackPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {
    entry: {
      index: [path.join(__dirname, "src")],
    },
    output: {
      path: path.resolve( __dirname, 'lib' ),
      filename: 'reacteditor.js',
      library: 'ReactEditor',
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },

    optimization: {
      minimizer: [
        new UglifyJsWebpackPlugin( {
          sourceMap: true,
          uglifyOptions: {
            output: {
              // Preserve CKEditor 5 license comments.
              comments: /^!/
            }
          }
        } )
      ]
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
              // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
              // to CKEditor 5 icons only.
              test: /\.svg$/,

              use: [ 'raw-loader' ]
          },
          {
              // Or /ckeditor5-[^/]+\/theme\/[^/]+\.css$/ if you want to limit this loader
              // to CKEditor 5 theme only.
              test: /\.css$/,
              use: [
                  {
                      loader: 'style-loader',
                      options: {
                          singleton: true
                      }
                  },
                  {
                      loader: 'postcss-loader',
                      options: styles.getPostCssConfig( {
                          themeImporter: {
                              themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                          },
                          minify: true
                      } )
                  },
              ]
          }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
     // Useful for debugging.
     devtool: 'source-map',

     // By default webpack logs warnings if the bundle is bigger than 200kb.
     performance: { hints: false }
};
