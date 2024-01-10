

- loader
让webpack可以处理各种资源，包括图片，字体，样式，脚本，json，url等等。不仅仅是js


-  npm i html-webpack-plugin -D
安装可以让webpack读懂html的插件，这些东西可以在官方文档中找到，不懂的可以搜

package.json文件中的scripts字段里面，可以配置webpack的命令，比如npm run build，npm run dev
其中webpack --config webpack.config.js  可以简写为 webpack

- npm i mini-css-extract-plugin -D


- npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime -D
安装babel，让webpack支持es6等语法


- npm i vue-template-compiler
安装vue模板编译器，让webpack支持vue模板

- npm i vue-template-compiler vue-loader @vue/babel-preset-jsx -D
安装vue-loader，让webpack支持vue模板
