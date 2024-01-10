const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode:'development',  // 开发模式
  entry:{
    main:'./src/main.js', //  入口文件
  },
  output:{
    path:path.resolve(__dirname,'./dist') ,  // __dirname  拿到learn-webpack的绝对路径
    filename:'js/chunk-[contenthash].js',//为什么chunk后面带一串哈希值？这是为了区分代码再次更新之后文件名没变更但是代码变更了 哈希值变了说明代码更新了
    clean:true, // 自动清理上一次打包的结构
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html', // 告诉webpack你帮我去读这个文件的html
      filename:'index.html',
      inject:'body'  // 告诉webpack植入到body里面去  // 告诉webpack，你要把这个文件注入到哪个标签里面去
    }),
    new MinCssExtractPlugin({
      filename:'styles/chunk-[contenthash].css',
      ignoreOrder:true
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.css$/,   // 当碰到.css文件的时候，用css-loader来处理
        use:[
          MinCssExtractPlugin.loader,
          // 'style-loader',   // 这个顺序是有讲究的，必须先敲style-loader,再敲css-loader，数组中是从右往左生效的  
          // 这个注释是因为上面一个MinCssExtractPlugin.loader会生成一份css文件，所以不需要再用style-loader来处理了
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        type:'asset',
        // parser:{
        //   dataUrlConditions:{
        //     maxSize:5 * 1024 * 1024,
        //   },
        // },
        generator:{
          filename:'images/[contenthash][ext][query]'
        }
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,  // node_modules 排除在外，不然里面的文件也全部降级了，耗时巨长
        use:['babel-loader']
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  }
}