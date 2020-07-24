const path = require('path');
module.exports =  (env = {mode: 'development'})  => {
    const isProduction = env.mode === 'production';
return {
  mode: env.mode,
    entry: "./src/index.js",
    output: {
        path:   __dirname + "/dist",
        filename:"bundle.js"
    },
    module:{
        rules:[ {  test: /\.js$/,   exclude: /node_modules/,    use: ['babel-loader'] }]
    },devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
      }
   
       
    }
    
    
}
 