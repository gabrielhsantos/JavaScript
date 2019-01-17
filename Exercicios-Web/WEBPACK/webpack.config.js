const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimezeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // mode: 'production', // minificar o código
    // mode: 'development',
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: { // pasta de saída
        filename: 'principal.js',
        path: __dirname + '/public' // __dirname aponta p o raiz e joga o build para a pasta public
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimezeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // instância de uma função construtora
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{           
            // test: /\.css$/, // loader responsável pela leitura de arquivos .cc
            test: /\.s?[ac]ss$/, // regex resolvendo para CSS/SCSS/SASS
            use: [
                MiniCssExtractPlugin.loader, // conflitante com o 'style-loader'
                // 'style-loader', // Add CSS a DOM injetando a tag <style> 
                'css-loader', // interpreta os @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}