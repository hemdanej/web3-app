module.exports={
    entry: [
        './src/main.js'
    ],
    output:{
        filename: 'build.js'
    },
    mode: 'none',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }

                }            
        ]
    }
}