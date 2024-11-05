module.exports = {
  presets: [
    '@babel/preset-env', // babel自带的规则
    '@vue/babel-preset-jsx',  // 请你使用这个规则去解析vue代码
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}